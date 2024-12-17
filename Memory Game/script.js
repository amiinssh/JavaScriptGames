const gridDisplay = document.querySelector("#grid");

const cardsWon = []
let cardsChosenIds = []
let cardChosen = [];
const cardArray = [
  {
    name: "fries",
    img: "/images/fries.png",
  },

  {
    name: "cheeseburger",
    img: "/images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "/images/hotdog.png",
  },

  {
    name: "pizza",
    img: "/images/pizza.png",
  },

  {
    name: "milkshake",
    img: "/images/milkshake.png",
  },

  {
    name: "ice-cream",
    img: "/images/ice-cream.png",
  },
  {
    name: "fries",
    img: "/images/fries.png",
  },

  {
    name: "cheeseburger",
    img: "/images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "/images/hotdog.png",
  },

  {
    name: "pizza",
    img: "/images/pizza.png",
  },

  {
    name: "milkshake",
    img: "/images/milkshake.png",
  },

  {
    name: "ice-cream",
    img: "/images/ice-cream.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
const resultDisplay = document.querySelector('#result')

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "/images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', "/images/blank.png")
        cards[optionOneId].setAttribute('src', "/images/blank.png")

        alert('You have clicked the same card')
    }

    if (cardChosen[0] == cardChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', "/images/white.png")
        cards[optionTwoId].setAttribute('src', "/images/white.png")
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    } else {
        cards[optionOneId].setAttribute('src', "/images/blank.png")
        cards[optionTwoId].setAttribute('src', "/images/blank.png")
        alert('Sorry try again')
    }

    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congartulations you found them all!'
    }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardChosen.length === 2) {
    setTimeout( checkMatch, 500 )
  }
}
