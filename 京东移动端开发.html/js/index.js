//
//
function search(){
    var search = document.getElementsByClassName('header')[0];

var banner = document.getElementsByClassName('loop')[0];
//
var height = banner.offsetHeight;
window.onscroll = function(){
    //当滚动高度大于banner时候颜色不变
    //首先获取banner高度
    //判断
    var top = document.documentElement.scrollTop;
    if (top>height){
        search.style.background = 'rgba(201,21,35,0.85)'
    }else{
        //降低透明度
        var opcty = top/this.height*0.85;
        search.style.background = 'rgba(201,21,35,'+opcty+')'
    }
}
}

// 倒计时
function secondkill(){
    //获取所有数字
    //设置时分秒
    //时分秒到页面
    var str_time = document.getElementsByClassName('str_time')[0];
    //拿到需要添加内容的元素
    var str_num = document.getElementsByClassName('num');


    var times = 5 * 60 * 60;
    var timer = setInterval(function(){
        times--;
        var hours = Math.floor(times/(60*60));
        var minutes = Math.floor(times/60%60);
        var seconds = times%60

        str_num[0].innerHTML = hours > 10 ?Math.floor(hours/10):0;
        str_num[1].innerHTML = hours % 10;

        str_num[2].innerHTML = minutes > 10 ?Math.floor(minutes/10):0;
        str_num[3].innerHTML = minutes % 10;

        str_num[4].innerHTML = seconds > 10 ?Math.floor(seconds/10):0;
        str_num[5].innerHTML = seconds % 10;
    },1000)
}
search()
secondkill()