let currentHr = document.querySelector("#hr");
let currentMin = document.querySelector("#min");
let currentSec = document.querySelector("#sec");

function runClock() {
  const currentDate = new Date();

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  randomBgColor(seconds)

  if (hours < 10) {
    hours = "0" + hours.toString();
  }
  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }




  currentHr.innerText = hours;
  currentMin.innerText = minutes;
  currentSec.innerText = seconds;
}

let interval = setInterval(runClock, 1000);


function randomBgColor(seconds) {
  if(+seconds === 00) {
  const colors = ['#1363DF', '#827397','#68A7AD', '#8479E1', '#5B7DB1', '#C3B091']
    const randomColor =colors[Math.floor(Math.random() *  colors.length)  ]
    console.log(randomColor)
    document.body.style['background'] = `${randomColor}`
  }

 }





