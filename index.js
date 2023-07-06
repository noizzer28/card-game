import Deck from "./components/deck.js";
let gameLevel = null;
const gamecontainer = document.querySelector(".game");
const startContainer = document.getElementById("start");
const deck = Object.values(new Deck()).flat();
const cardsBack = [];

function renderStartPage() {
  gamecontainer.style.display = "none";
  const startButton = document.querySelector(".start-box-button");
  const menuOptions = document.querySelectorAll(".start-box-radio");
  for (const menuOption of menuOptions) {
    startButton.addEventListener("click", () => {
      if (menuOption.checked) {
        gameLevel = menuOption.value;
        renderBackSide();
        renderFrontSide();
        startContainer.style.display = "none";
        gamecontainer.style.display = "block";
      }
    });
  }
}

function renderBackSide() {
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
  const frontSideElement = document.querySelector(".front-side");
  frontSideElement.innerHTML = deck
    .map((card) => {
      return ` 
      <div class="card-front">
    <div class="card-value-top">
        <p>A</p>
      ${card.suit.top}
    </div>
      ${card.suit.middle}
    <div class="card-value-bottom">
        <p>A</p>
      ${card.suit.top}
    </div>
</div>`;
    })
    .join("");
}

renderStartPage();
