const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft > 0 && cactusLeft < 70 && dinoBottom <= 50) {
    alert("Game Over");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
