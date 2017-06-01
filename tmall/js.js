/*
* @Author: dell
* @Date:   2017-05-01 21:10:03
* @Last Modified by:   DELL
* @Last Modified time: 2017-05-14 12:09:05
*/

'use strict';
function $(selector,ranger=document){
	if(typeof selector=='string'){//字符串
		let select=selector.trim();//去空
		let first=select.charAt(0);
		if(first=='.'){//classname
			return ranger.getElementsByClassName(select.substring(1));
		}else if(first=='#'){//id
			return document.getElementById(select.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z]{0,8}$/.test(select)){//tag
			return ranger.getElementsByTagName(select);
		}else if(/^<[a-zA-Z][a-zA-Z]{0,8}>$/.test(select)){
			return document.createElement(select.slice(1,-1));
        }
		}else if(typeof selector=='function'){//函数
			addEvent(window,'load',selector);
		}
	}

function addEvent(obj,type,fn){
    obj.addEventListener(type,fn,false);
}
$(function(){


//////banner效果
	let index=0;
	let t;
	t=setInterval(move, 4000);
	let banner=$('.banner')[0];
	let a1=$('.a1',banner);
	let lun=$('.lun')[0];
	let lis=$('li',lun); 
	function move(){
		index++;
		if(index==a1.length){
			index=0;
		}
		for(let i=0;i<a1.length;i++){
			a1[i].style.display='none';
			lis[i].style.background='rgba(162,162,162,.8';
		}
			a1[index].style.display='block';
			lis[index].style.background='none';
	}
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            for(let j=0;j<lis.length;j++){
                a1[j].style.display='none';
                lis[j].style.background='rgba(162,162,162,.8';
            }
            a1[i].style.display='block';
            lis[i].style.background='none';
            index=i;
        }
    }


////////品牌轮播效果
    let ping=$('.ping')[0];
	let jiant1=$('.jiant1',ping)[0];
	let jiant2=$('.jiant2',ping)[0];
	let p1=$('.p1')[0];
	let p2=$('.p2')[0];
    let pWidth=parseInt(getComputedStyle(p1,null).width);
	jiant2.onclick=function () {
        jiant1.style.display='block';
        jiant2.style.display='none';
        p1.style.left=pWidth+'px';
        p2.style.left=0+'px';
        animate(p2,{left:-pWidth});
        animate(p1,{left:0});
	}
    jiant1.onclick=function () {
        jiant2.style.display='block';
        jiant1.style.display='none';
        animate(p2,{left:0});
        animate(p1,{left:pWidth});
    }



///////侧边栏，按需加载，搜索框headsou的消失出现效果
	let ch=window.innerHeight;
	let floors=document.querySelectorAll('.floor');
	let arr=[];
	floors.forEach(function(value){
		arr.push(value.offsetTop);
	});
	let flag1=true,n=0,flag=true;
	let sli=document.querySelectorAll('.side>li');
	for(let i=0;i<sli.length;i++){
		sli[i].onclick=function(){
			flag1=false;
			animate(document.body,{scrollTop:arr[i]},function(){flag1=true;})
		}
		/*sli[i].onmouseover=function () {
            switch (i){
                case 1:sli[i].style.background='#EA5F8D';break;
                case 2:sli[i].style.background='#0AA6E8';break;
                case 3:sli[i].style.background='#64C333';break;
                case 4:sli[i].style.background='#F15453';break;
                case 5:sli[i].style.background='#19C8A9';break;
                case 6:sli[i].style.background='#F7A945';break;
                case 7:sli[i].style.background='#000000';break;
            }
        }
        sli[i].onmouseout=function () {
            sli[i].style.background='rgba(0,0,0,.6)';
        }*/
	}

	let headsou=$('.headsou')[0];
    let side=$('.side')[0];
	window.onscroll=function(){
		if(!flag1){
			return;
		}
		let tops=document.body.scrollTop;
		for(let i=0;i<arr.length;i++){
			if(tops+ch>arr[i]+200){
                for(let z=0;z<arr.length;z++){
                    sli[z].style.background='rgba(0,0,0,.6)';
                }
                switch (i){
                    case 1:sli[i].style.background='#EA5F8D';break;
                    case 2:sli[i].style.background='#0AA6E8';break;
                    case 3:sli[i].style.background='#64C333';break;
                    case 4:sli[i].style.background='#F15453';break;
                    case 5:sli[i].style.background='#19C8A9';break;
                    case 6:sli[i].style.background='#F7A945';break;
                    case 7:sli[i].style.background='#000000';break;
                }
                let sp=$('#sp');
                sp.style.background='#DD2727';
                let spe=$('#spe');
                spe.style.background='#ACACAC';
				let floors=$('.floor');
                let imgs=$('img',floors[i]);
				for(let j=0;j<imgs.length;j++){
					imgs[j]['src']=imgs[j]['title']
				}
			}
		}
	 	if(tops>=600){
	        if(flag){
	            flag=!flag;
	            headsou.style.transform=`translateY(50px)`;
	            side.style.transform=`translateX(38px)`;
	        }
	    }else if(tops<600){
	        if(!flag){
	            flag=!flag;
	            headsou.style.transform=`translateY(-50px)`;
                side.style.transform=`translateX(-38px)`;
	        }
	    }
    }




})
