$(function () {
    //fullpage
    $('#fullpage').fullpage({
        navigation:true,
        verticalCentered:true,
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu: '.section2 .nav #ul',
        afterLoad:function (anchorLink, index) {
            if(index == 3){
                $('.section3').find('canvas').delay(500).animate(1500, 'easeOutExpo');
            }

        }
    });
    //percent
    let canvas=document.querySelector('canvas');
    let ctx=canvas.getContext('2d');
    ctx.font='30px sans-serif';
    ctx.lineWidth=5;
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.strokeStyle='#10c483';
    ctx.fillStyle='#10c483';
    ctx.lineCap='round';
    function percent(num) {
        let ctx=document.querySelector('canvas').getContext('2d');
        let n=0,t;
        function keyframe() {
            n++;
            if (n == num) {
                clearInterval(t);
                cancelAnimationFrame(t);
            }else{
                t=requestAnimationFrame(keyframe);
            }
            ctx.clearRect(0, 0, 100, 100);
            let angle = n * 360 / 100 * Math.PI / 180;
            ctx.beginPath();
            ctx.arc(60, 60, 50, 0, angle, false);
            ctx.fillText(`${n}%`, 60, 60);
            ctx.stroke();
            ctx.clearRect(150, 0, 300, 100);
            ctx.beginPath();
            ctx.arc(240, 60, 50, 0, angle, false);
            ctx.fillText(`${n}%`, 240, 60);
            ctx.stroke();
            ctx.clearRect(300, 0, 400, 100);
            ctx.beginPath();
            ctx.arc(420, 60, 50, 0, angle, false);
            ctx.fillText(`${n}%`, 420, 60);
            ctx.stroke();
        }
        keyframe();
    }
    percent(70);
});