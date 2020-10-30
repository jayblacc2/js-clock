let currentHr = document.querySelector("#hr");
let currentMin = document.querySelector("#min");
let currentSec = document.querySelector("#sec");

function runClock() {
  const currentDate = new Date();

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

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
console.log(
  `${currentDate.getHours}: ${currentDate.getMinutes}: ${currentDate.getSeconds}`
);

// let hr = (createElement().innerHTML = currentDate.getHours = appendChild());
