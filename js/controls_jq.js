// var video = document.querySelector(".video");
// var play = document.querySelector(".play");
// var pause = document.querySelector(".pause");
// var progress = document.querySelector(".progress");
// var cur_progress = document.querySelector(".cur_progress");
// var current_time = document.querySelector(".current_time");
// var total_time = document.querySelector(".total_time");
// var volume = document.querySelector(".volume");
// var cur_volume = document.querySelector(".cur_volume");
// var fullScreen = document.querySelector(".fullScreen");

var video = $('.video');
var play = $('.play');
var pause = $('.pause');
var progress = $('.progress');
var cur_progress = $('.cur_progress');
var current_time = $('.current_time');
var total_time = $('.total_time');
var volume = $('.volume');
var cur_volume = $('.cur_volume');
var fullScreen = $('.fullScreen');

// var play = document.querySelector(".play");
// var pause = document.querySelector(".pause");
// var progress = document.querySelector(".progress");
// var cur_progress = document.querySelector(".cur_progress");
// var current_time = document.querySelector(".current_time");
// var total_time = document.querySelector(".total_time");
// var volume = document.querySelector(".volume");
// var cur_volume = document.querySelector(".cur_volume");
// var fullScreen = document.querySelector(".fullScreen");
// 视频总时长
// var totalTime = ToStr_time(video.duration);
// total_time.innerHTML = totalTime;

// console.log(video[0]);
// 添加监听实践
console.log(video[0]);
video.bind("canplay", function () {
    //总时长
    console.log('can');
    var totalTime = ToStr_time(video[0].duration);
    total_time.innerHTML = totalTime;
    //播放
    play.click(function () {

        video[0].play();
        play.css('display','none');
        pause.css('display','inline-block');
        // pause.style.display = "inline-block";

    })
    // 暂停
    pause.click(function () {

        video[0].pause();
        // play.css('display','none');
        pause.css('display','none');
        play.css('display','inline-block');

    })
    // 进度条更新
    video.bind('timeupdate', function () {

        var cur_t = video[0].currentTime;
        var scale = cur_t / video[0].duration;
        cur_progress.style.width = scale * 100 + '%';
        current_time.innerHTML = ToStr_time(cur_t);

    })

    //进度条单击
    progress.bind('click', function (event) {
        var offsetX = event.offsetX;
        cur_progress.width() = offsetX + 'px';
        var proW = progress.clientWidth;
        var proScale = offsetX / proW;
        video.currentTime = video[0].duration * proScale;
        current_time.innerHTML = ToStr_time(totalTime * proScale);

    })
    // 时间单击
    volume.addEventListener('click', function (event) {
        var offsetX = event.offsetX;
        cur_volume.style.width = offsetX + 'px';
        var volW = volume.clientWidth;
        var volScale = offsetX / volW;
        video.volume = volScale;
        

    }, false)

    // 全屏
    fullScreen.addEventListener('click',function(){

        video[0].webkitRequestFullscreen();
        video[0].msRequestFullscreen();
        video[0].mozRequestFullscreen();

    },false)
})

//时间转换
function ToStr_time(time) {
    var min ='0';
    var s ='0';
    
    min = Math.floor(time / 60);
    s = Math.floor(time % 60);

    min = min > 10 ? min : '0' + min;
    s = s > 10 ? s : '0' + s;
    return min + ':' + s;
}
