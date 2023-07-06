import Deck from "./components/deck.js";
let gameLevel = null;
const gamecontainer = document.querySelector(".game");

const deck = Object.values(new Deck()).flat();
const cardsBack = [];

function renderStartPage() {
  const startContainer = document.getElementById("start");
  const startButton = document.querySelector(".start-box-button");
  const menuOptions = document.querySelectorAll(".start-box-radio");
  for (const menuOption of menuOptions) {
    startButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (menuOption.checked) {
        gameLevel = menuOption.value;

        startContainer.style.display = "none";
        gamecontainer.style.display = "block";
        renderBackSide();
        renderFrontSide();
      }
    });
  }
}

function renderBackSide() {
  console.log("here");
  const backSideElement = document.querySelector(".back-side");

  for (let index = 0; index < 36; index++) {
    const element = `<div class="card-back"></div>`;
    cardsBack.push(element);
  }
  backSideElement.innerHTML = cardsBack.join("");
  // setTimeout(() => {
  //   backSideElement.style.display = "none";
  // }, 1500);
}

function renderFrontSide() {
  console.log("here2");
  const frontSideElement = document.querySelector(".front-side");
  frontSideElement.innerHTML = deck
    .map((card) => {
      return ` 
      <div class="card-item-front">
        <div class="card-front">
            <div class="card-value-top">
          <p>${card.value}</p>
        ${card.suit.top}
            </div>
        ${card.suit.middle}
            <div class="card-value-bottom">
          <p>${card.value}</p>
        ${card.suit.top}
            </div>
        </div>
      </div>`;
    })
    .join("");

  turnDeck();
}

renderStartPage();

function turnDeck() {
  const cardsFront = document.querySelectorAll(".card-item-front");
  console.log(cardsFront);
  for (const cardFront of cardsFront) {
    cardFront.addEventListener("click", () => {
      cardFront.style.zIndex = "1";
    });
  }
}
