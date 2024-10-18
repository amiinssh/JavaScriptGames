let playText = document.getElementById("playText");
let restartbtn = document.getElementById("restartbtn");
let boxes = Array.from(document.getElementsByClassName("box"));

let winnerColor = getComputedStyle(document.body).getPropertyValue(
  "--winnercolor"
);

const X_text = "X";
const O_text = "O";
let currentPlayer = X_text;
let spaces = Array(9).fill(null);

const start = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClick));
};

function boxClick(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    const winningCombination = playerHasWon();
    if (winningCombination !== false) {
      playText.innerHTML = `${currentPlayer} Won!`;
      winningCombination.forEach((index) => {
        boxes[index].style.backgroundColor = winnerColor;
      });
      return;
    }

    currentPlayer = currentPlayer == X_text ? O_text : X_text;
  }
}

function playerHasWon() {
  for (const condition of winnerComb) {
    let [a, b, c] = condition;
    if (spaces[a] && spaces[a] == spaces[b] && spaces[b] == spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}

const winnerComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

restartbtn.addEventListener("click", restart);

function restart() {
  spaces.fill(null);
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });

  playText.innerHTML = "Tic Tac Toe";
  currentPlayer = X_text;
}

start();
