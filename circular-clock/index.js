let minute = document.querySelector("#minute .counter");
let hour = document.querySelector("#hour .counter");
let day = document.querySelector("#day .counter");
let timerSeconds = document.querySelector("#timer #seconds");
let timerMinutes = document.querySelector("#timer #minutes");
let timerHours = document.querySelector("#timer #hours");

function alwaysWithTwoNumbers(number) {
  return number < 10 ? "0".concat(number) : number;
}

function updateTimer(time) {
  timerSeconds.innerHTML = alwaysWithTwoNumbers(time.getSeconds());
  timerMinutes.innerHTML = alwaysWithTwoNumbers(time.getMinutes());
  timerHours.innerHTML = alwaysWithTwoNumbers(time.getHours());
}

(function tick() {
  let initialTime = new Date();
  
  updateTimer(initialTime);

  minute.style.strokeDasharray = `${
    initialTime.getSeconds() * 1.6666666666666667
  }, 100`;
  hour.style.strokeDasharray = `${
    initialTime.getMinutes() * 1.6666666666666667 +
    initialTime.getSeconds() * 0.02824858757062147
  }, 100`;
  day.style.strokeDasharray = `${
    initialTime.getHours() * 4.166666666666667 +
    initialTime.getMinutes() * 0.07246376811594203 +
    initialTime.getSeconds() * 0.0012077294685990338
  }, 100`;

  setInterval(() => {
    let currentTime = new Date();

    if (currentTime.getSeconds() !== 0) {
      minute.style.transition = "stroke-dasharray 1s linear";
      minute.style.strokeDasharray = `${
        currentTime.getSeconds() * 1.694915254237288
      }, 100`;
      hour.style.transition = "stroke-dasharray 1s linear";
      hour.style.strokeDasharray = `${
        currentTime.getMinutes() * 1.6666666666666667 +
        currentTime.getSeconds() * 0.02824858757062147
      }, 100`;
      day.style.transition = "stroke-dasharray 1s linear";
      day.style.strokeDasharray = `${
        currentTime.getHours() * 4.166666666666667 +
        currentTime.getMinutes() * 0.07246376811594203 +
        currentTime.getSeconds() * 0.0012077294685990338
      }, 100`;
    } else {
      minute.style.transition = "";
      minute.style.strokeDasharray = `${
        currentTime.getSeconds() * 1.694915254237288
      }, 100`;
      hour.style.transition = "";
      hour.style.strokeDasharray = `${
        currentTime.getMinutes() * 1.6666666666666667
      }, 100`;
      day.style.transition = "";
      day.style.strokeDasharray = `${
        currentTime.getHours() * 4.166666666666667 +
        currentTime.getMinutes() * 0.07246376811594203
      }, 100`;
    }

    updateTimer(currentTime);
  }, 500);
})();
