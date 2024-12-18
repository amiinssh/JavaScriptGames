const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector(".time-left");
const score = document.querySelector(".score");

let result = 0;
let hitPositions;
let currentTime = 10;
let timerId = null;


function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPositions = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPositions) {
      result++;
      score.textContent = result;
      hitPositions = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}


function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000) 

moveMole()
