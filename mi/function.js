/*
* @Author: DELL
* @Date:   2017-05-07 22:00:34
* @Last Modified by:   DELL
* @Last Modified time: 2017-05-08 09:18:52
*/

'use strict';
window.onload=function(){
/////内容轮播
	let current=0,next=0,flag=true;
for(let a=0;a<4;a++){
	let nfirst,nbox,njian1,njian2,nlun,nlis;
	let nei=document.querySelector('.nei');
/*	let nfirst=document.querySelector('.nei .first');
	let nbox=nfirst.querySelectorAll('.box');
	let njian1=nfirst.querySelector('.njian1');
	let njian2=nfirst.querySelector('.njian2');
	let nlun=document.querySelector('.first .lun');
	let nlis=nlun.querySelectorAll('li');*/
		nfirst=nei.querySelectorAll('.first')[a];
		nbox=nfirst.querySelectorAll('.box');
		njian1=nfirst.querySelector('.njian1');
		njian2=nfirst.querySelector('.njian2');
		nlun=nfirst.querySelector('.lun');
		nlis=nlun.querySelectorAll('li');
	let nboxWidth=parseInt(getComputedStyle(nfirst,null).width);
	let current=0,next=0,flag=true;
	//箭头点击效果
	
	njian2.onclick=function(){
		if(!flag){
            return;
        }          
        flag=false;
		nmove();
	}
	njian1.onclick=function(){
		if(!flag){
            return;
        }          
        flag=false;
		nmoveDown();
	}
	//轮播点点击效果
	nlis.forEach(function(value,index,obj){
        value.onclick=function(){
            if(current==index){
                return;
            }
            nlis[current].className='';
            nlis[index].className='sp';
            if(index>current){
                nbox[index].style.left=nboxWidth+'px';
                animate(nbox[current],{left:-nboxWidth});
                animate(nbox[index],{left:0});
            }else if(index<current){
                nbox[index].style.left=-nboxWidth+'px';
                animate(nbox[current],{left:nboxWidth});
                animate(nbox[index],{left:0});
            }
            current=next=index;
        }
    })
	//图片轮播效果
	for(let i=0;i<nbox.length;i++){
		if(i==0){
			continue;
		}
		nbox[i].style.left=nboxWidth+'px';
	}
	function nmove(){
		next++;
		if(next==nbox.length){
			return;
		}
		nbox[next].style.left=nboxWidth+'px';
		nlis[current].className='';
		nlis[next].className='sp';
		animate(nbox[current],{left:-nboxWidth});
		animate(nbox[next],{left:0},function(){flag=true;});
		current=next;
	}
	function nmoveDown(){
		next--;
		if(next<0){
			return;
		}
		nbox[next].style.left=-nboxWidth+'px';
		nlis[current].className='';
		nlis[next].className='sp';
		animate(nbox[current],{left:nboxWidth});
		animate(nbox[next],{left:0},function(){flag=true;});
		current=next;
	}
}

////////banner效果
	let banner=document.querySelector('.banner');
	let a1=banner.querySelectorAll('.a1');
	let lun=document.querySelector('.lun');
	let lis=lun.querySelectorAll('li');
	let jian1=document.querySelector('.jian1');
	let jian2=document.querySelector('.jian2');
	let index=0,t;
	t=setInterval(move,2000);
	//移入移出
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	//轮播点点击效果
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			for(let j=0;j<lis.length;j++){
				lis[j].className='';
				a1[j].style.display='none';
			}
			lis[i].className='show';
			a1[i].style.display='block';
			index=i;
		}
	}
	//箭头效果
	jian1.onclick=function(){
		moveDown();
	}
	jian2.onclick=function(){
		move();
	}
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		for(let i=0;i<lis.length;i++){
			lis[i].className='';
			a1[i].style.display='none';
		}
		lis[index].className='show';
		a1[index].style.display='block';
	}
	function moveDown(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.background='#887E6E';
			a1[i].style.display='none';
		}
		lis[index].style.background='#F1F0F3';
		a1[index].style.display='block';
	}



////////star效果
	let star=document.querySelector('.star');
	let turn=star.querySelectorAll('.turn');
	let turn1=document.querySelector('#aa');
	let turn2=document.querySelector('#bb');
	let turnWidth=parseInt(getComputedStyle(star,null).width);
	let turnt=setInterval(turnmove,5000);
	//移入移出效果
	star.onmouseover=function(){
		clearInterval(turnt);
	}
	star.onmouseout=function(){
		turnt=setInterval(turnmove,5000);
	}
	//箭头点击效果
	turn1.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;		
		turnmove();
	}
	turn2.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		turnmoveDown();
	}
	//turn左右轮播
	for(let i=0;i<turn.length;i++){
		if(i==0){
			continue;
		}
		turn[i].style.left=turnWidth+'px';
	}
	function turnmove(){
		next++;
		if(next>=turn.length){
			return;
		}
		turn[next].style.left=turnWidth+'px';
		animate(turn[current],{left:-turnWidth});
		animate(turn[next],{left:0},function(){flag=true;});
		current=next;
	}
	function turnmoveDown(){
		next--;
		if(next<0){
			next=current+1;
		}
		turn[next].style.left=-turnWidth+'px';
		animate(turn[current],{left:turnWidth});
		animate(turn[next],{left:0},function(){flag=true;});
		current=next;
	}




////////推荐效果
	let tui=document.querySelector('.tui');
	let tuiturn=tui.querySelectorAll('.turn');
	let tuiturn1=document.querySelector('#xx'); 
	let tuiturn2=document.querySelector('#yy'); 
	let tuiturnWidth=parseInt(getComputedStyle(tui,null).width);
	console.log(tuiturn2);
	//箭头点击效果
	tuiturn1.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;		
		tuimove();
	}
	tuiturn2.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		tuimoveDown();
	}
	//turn左右轮播
	for(let i=0;i<tuiturn.length;i++){
		if(i==0){
			continue;
		}
		tuiturn[i].style.left=tuiturnWidth+'px';
	}
	function tuimove(){
		next++;
		if(next>=tuiturn.length){
			next=current-1;
		}
		tuiturn[next].style.left=tuiturnWidth+'px';
		animate(tuiturn[current],{left:-tuiturnWidth});
		animate(tuiturn[next],{left:0},function(){flag=true;});
		current=next;
	}
	function tuimoveDown(){
		next--;
		if(next<0){
			next=current+1;
		}
		tuiturn[next].style.left=-tuiturnWidth+'px';
		animate(tuiturn[current],{left:tuiturnWidth});
		animate(tuiturn[next],{left:0},function(){flag=true;});
		current=next;
	}



////////搭配热门轮播效果
	let da=document.querySelector('.da');
	let dare=da.querySelector('.re');
	let dazi=dare.querySelectorAll('li');
	let daf2=da.querySelectorAll('.f2');
	for(let i=0;i<dazi.length;i++){
		dazi[i].onmouseenter=function(){
			for(let j=0;j<daf2.length;j++){
				daf2[j].style.display='none';
				dazi[j].className='';
			}
			daf2[i].style.display='block';
			dazi[i].className='dasp';
		}
	}



/////////配件热门轮播效果
	let pei=document.querySelector('.pei');
	let peire=pei.querySelector('.re');
	let peizi=peire.querySelectorAll('li');
	let peif2=pei.querySelectorAll('.f2');
	for(let i=0;i<peizi.length;i++){
		peizi[i].onmouseenter=function(){
			for(let j=0;j<peif2.length;j++){
				peif2[j].style.display='none';
				peizi[j].className='';
			}
			peif2[i].style.display='block';
			peizi[i].className='dasp';
		}
	}


////////周边热门轮播效果
	let zhou=document.querySelector('.zhou');
	let zhoure=zhou.querySelector('.re');
	let zhouzi=zhoure.querySelectorAll('li');
	let zhouf2=zhou.querySelectorAll('.f2');
	for(let i=0;i<zhouzi.length;i++){
		zhouzi[i].onmouseenter=function(){
			for(let j=0;j<zhouf2.length;j++){
				zhouf2[j].style.display='none';
				zhouzi[j].className='';
			}
			zhouf2[i].style.display='block';
			zhouzi[i].className='dasp';
		}
	}



}