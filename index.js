const menu = document.querySelector("#menu");
const timerConEl = document.querySelector("#hidden-time-con");
const timerConTimerText = document.querySelector("#hidden-timer-text");

function showMenu() {
  menu.classList.toggle("show");
}

var hmSpeed;

function speed(spee) {
  localStorage.setItem("speed", spee.toString());
}

function revel() {
  let sec = 4;
  startak();
  const timer1 = setInterval(() => {
    timerConTimerText.textContent = sec;
    sec--;
    if (sec == 0) {
      timerConEl.classList.add("hidden-timer");
      timerConEl.classList.remove("show-timer");
      clearInterval(timer1);
      fun();
    }
    console.log(sec);
  }, 1000);
}

function startak() {
  let lsSpeed = localStorage.getItem("speed");
  hmSpeed = lsSpeed;
  localStorage.removeItem("speed");
}

//game
const ballEl = document.querySelector("#ball");
const timeEl = document.getElementById("time");
// const highSSEl = document.getElementById("highSc");
const scoreEl = document.getElementById("score");

var score = 0;
function randomNum(value) {
  return Math.floor(Math.random() * value);
}

function scoreF() {
  score += 1;
  console.log("i am click");
  scoreEl.textContent = `Score: ${score}`;
}

function fun() {
  var audio = new Audio("drake.mp3");
  audio.play();
  // let HighScore = 0;
  let seconds = 30;
  console.log(hmSpeed);
  const secc = setInterval(() => {
    timeEl.textContent = `time: ${seconds}`;
    seconds--;
    if (seconds == 0) {
      clearInterval(ballMove);
      clearInterval(secc);
      audio.pause();
      audio.currentTime = 0;
      window.location.href = "final.html";
    }
  }, 1000);

  const ballMove = setInterval(() => {
    ballEl.style.inset = `${randomNum(90)}% ${randomNum(90)}%`;
  }, hmSpeed);
}

// '_'
