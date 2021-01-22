// Get the element from the DOM
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".second");
const milisecond = document.querySelector(".milisecond");
const start_btn = document.querySelector(".start_btn");
const stop_btn = document.querySelector(".stop_btn");
const reset_btn = document.querySelector(".reset_btn");

// Count number
let secondCounter = 0;
let minutesCounter = 0;
let milisecondCounter = 0;

// Create global variable to save interval id because setInterval function return a id
var intervalId;

// function to be executed continuously
function timeCounting() {
  milisecondCounter++;

  if (milisecondCounter < 10) {
    milisecond.textContent = "0" + milisecondCounter;
  } else milisecond.textContent = milisecondCounter;

  if (milisecondCounter == 60) {
    secondCounter++;
    milisecondCounter = 0;
    milisecond.textContent = "00";
    if (secondCounter < 10) {
      second.textContent = "0" + secondCounter;
    } else second.textContent = secondCounter;
  }

  if (secondCounter == 60) {
    minutesCounter++;
    secondCounter = 0;
    second.textContent = "00";
    if (minutesCounter < 10) {
      minutes.textContent = "0" + minutesCounter;
    } else minutes.textContent = minutesCounter;
  }
}

// Button event handler
start_btn.addEventListener("click", (e) => {
  intervalId = setInterval(timeCounting, 10);
});

reset_btn.addEventListener("click", (e) => {
  second.textContent = "00";
  minutes.textContent = "00";
  milisecond.textContent = "00";
  secondCounter = 0;
  minutesCounter = 0;
  milisecondCounter = 0;
});

stop_btn.addEventListener("click", (e) => {
  clearInterval(intervalId);
});
