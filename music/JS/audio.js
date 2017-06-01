/**
 * Created by DELL on 2017/5/16.
 */
window.onload=function(){
    let audio=document.querySelector('audio');
    let playBtn=document.querySelector('.bofang');
    let song=document.querySelector('.song');
    let singer=document.querySelector('.singer');
    let progress=document.querySelector('.progress');
    let percent=document.querySelector('.percent');
    let currentT=document.querySelector('.currentT');
    let durationT=document.querySelector('.durationT');
    let title=document.querySelector('.title');
    let lyrics=document.querySelector('.lyrics');
    let img=document.querySelector('img');
    let xiayishou=document.querySelector('.xiayishou');
    let shangyishou=document.querySelector('.shangyishou');
    let index=0;

    init(database[index]);
    //播放暂停
    playBtn.onclick=function () {
        if(audio.paused){
            audio.play();
            playBtn.classList.toggle('bofang');
        }else{
            audio.pause();
            playBtn.classList.toggle('bofang');
        }
    }

    //时间进度条
    function timeLength(time){
        let m=Math.floor(time/60)<10?'0'+Math.floor(time/60):Math.floor(time/60);
        let s=Math.floor(time%60)<10?'0'+Math.floor(time%60):Math.floor(time%60);
        return `${m}:${s}`;
    }
    let i=x=0;
    //歌词
    audio.ontimeupdate=function () {
        let current=timeLength(audio.currentTime);
        let all=timeLength(audio.duration);
        let time1=audio.currentTime;
        let times=audio.duration;
        percent.style.width=time1/times*100+'%';
        let string='';
        currentT.innerText= current;
        /*durationT.innerText=all;*/
        lyrics.innerHTML='';
        database[index]['lyrics'].forEach(function(value,index1){
            if(value.time==current){
                x=i=index1;
            }
        })
        if(x<5){
            i=0
        }else{
            i=x-5;
        }
        for(let j=i;j<database[index]['lyrics'].length;j++){
            if(j==x){
                string+=`
                    <li class="sp">
                         ${database[index]['lyrics'][j]['lyric']}
                    </li>`;
            }else{
                string+=`
                    <li >
                        ${database[index]['lyrics'][j]['lyric']}
                    </li>`;
            }
        }
        lyrics.innerHTML=string;
    }

    //初始化
            function init(obj) {
                //Top
                let string='';
                song.innerText=obj.songs;
                singer.innerText=obj.name;
                audio.src=obj.src;
                obj.lyrics.forEach(function (value) {
                    string+=`
                        <li>${value.lyric}</li>`
                })
                lyrics.innerHTML='';
                lyrics.innerHTML=string;
                //Bottom
                title.innerText=`${obj.songs}--${obj.name}`;
                img.src=obj.photo;
                currentT.innerText='00:00';
                durationT.innerText=obj.alltime;
            }
            //上、下一首
    xiayishou.onclick = function() {
        index++;
        if(index>database.length) {
            index=database.length;
        }
        audio.pause();
        init(database[index]);
        playBtn.className="iconfont bofang zanting";
    }
    shangyishou.onclick = function() {
        index--;
        if(index<0) {
            index=0;
        }
        audio.pause();
        init(database[index]);
        playBtn.className="iconfont bofang zanting";
    }
    //音量
    let volum=document.querySelector('.volum');
    let volumBtn=document.querySelector('.volumBtn');
    let volumC=document.querySelector('.volumC');
    let offsetL=volum.offsetLeft;
    // console.log(offsetL);
    volumBtn.onmousedown=function (e) {
        let ox=e.offsetX;
        volumBtn.onmousemove=function (e) {
            let cx=e.clientX;
            let lefts=cx-offsetL-ox;
            if(lefts>=92){
                lefts=92;
            }
            if(lefts<=0){
                lefts=0;
            }
            volumBtn.style.left=lefts+'px';
            volumC.style.width=lefts+2+'px';
            audio.volume=lefts/100;
        };
        volumBtn.onmouseup=function () {
            volumBtn.onmousemove=null;
            volumBtn.onmouseup=null;
        }
    };




}