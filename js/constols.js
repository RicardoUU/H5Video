var video = document.querySelector(".video");
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var progress = document.querySelector(".progress");
var cur_progress = document.querySelector(".cur_progress");
var current_time = document.querySelector(".current_time");
var total_time = document.querySelector(".total_time");
var volume = document.querySelector(".volume");
var cur_volume = document.querySelector(".cur_volume");
var fullScreen = document.querySelector(".fullScreen");

// 视频总时长
// var totalTime = ToStr_time(video.duration);
// total_time.innerHTML = totalTime;


// 添加监听实践
video.addEventListener("canplay", function () {
    //总时长
    var totalTime = ToStr_time(video.duration);
    total_time.innerHTML = totalTime;
    //播放
    play.addEventListener("click", function () {

        video.play();
        play.style.display = "none";
        pause.style.display = "inline-block";

    }, false)
    // 暂停
    pause.addEventListener("click", function () {

        video.pause();
        pause.style.display = "none";
        play.style.display = "inline-block";

    }, false)
    // 进度条更新
    video.addEventListener('timeupdate', function () {

        var cur_t = video.currentTime;
        var scale = cur_t / video.duration;
        cur_progress.style.width = scale * 100 + '%';
        current_time.innerHTML = ToStr_time(cur_t);

    }, false)

    //进度条单击
    progress.addEventListener('click', function (event) {
        var offsetX = event.offsetX;
        cur_progress.style.width = offsetX + 'px';
        var proW = progress.clientWidth;
        var proScale = offsetX / proW;
        video.currentTime = video.duration * proScale;
        current_time.innerHTML = ToStr_time(totalTime * proScale);

    }, false)
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

        video.webkitRequestFullscreen();
        video.msRequestFullscreen();
        video.mozRequestFullscreen();

    },false)
}, false)

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

