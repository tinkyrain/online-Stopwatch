//Timer value
let hourElement = document.getElementById('hour');
let minElement = document.getElementById('min');
let secElement = document.getElementById('sec');
let msecElement = document.getElementById('msec');

//Time value
let hour = 00,
    min = 00,
    sec = 00,
    msec = 00,
    interval

//Buttons
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

//Listeners

//START
startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(start_stopwatch, 10);
});

//PAUSE
pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
});

//STOP
stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  clear();
});


function start_stopwatch() {
  msec++;

  if(msec < 10){
    msecElement.innerText = '0' + msec;
  } else if(msec>9){
    msecElement.innerText = msec;
  }

  if(msec > 99){
    sec++;
    msec = 0;
  }

  if(sec < 10){
    secElement.innerText = '0' + sec;
  } else if(sec>9){
    secElement.innerText = sec;
  }

  if(sec > 59){
    min++;
    sec = 0;
  }

  if(min < 9){
    minElement.innerText = '0' + min;
  } else if(min>9){
    minElement.innerText = min;
  }

  if(min > 59){
    hour++;
    min = 0;
  }

  if(hour < 9){
    hourElement.innerText = '0' + hour;
  } else if(hour > 9){
    hourElement.innerText = hour;
  }
}

function clear() {
  hour = 00;
  min = 00;
  sec = 00;
  msec = 00;

  hourElement.innerText = '00';
  minElement.innerText = '00';
  secElement.innerText = '00';
  msecElement.innerText = '00';
}
