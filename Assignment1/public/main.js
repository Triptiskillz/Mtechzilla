
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('wminutes');
var ws = document.getElementById('wseconds');

var bm = document.getElementById('bminutes');
var bs = document.getElementById('bseconds');

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running !");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start  Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }
}

//Stop Function
function stopInterval(){
    clearInterval(startTimer);
}