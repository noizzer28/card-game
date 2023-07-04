// import { renderGame } from "./components/startGame.js";

let gameLevel = null;
const gamecontainer = document.querySelector(".game");
const startContainer = document.getElementById("start");

const cardsBack = [];
const cardsFront = [];

function renderStartPage() {
  gamecontainer.style.display = "none";
  const startButton = document.querySelector(".start-box-button");
  const menuOptions = document.querySelectorAll(".start-box-radio");
  for (const menuOption of menuOptions) {
    startButton.addEventListener("click", () => {
      if (menuOption.checked) {
        gameLevel = menuOption.value;
        renderBackSide();
        startContainer.style.display = "none";
        gamecontainer.style.display = "block";
      }
    });
  }
}

function renderBackSide() {
  const backSideElement = document.querySelector(".back-side");

  for (let index = 0; index < 36; index++) {
    const element = `<div class="card"></div>`;
    cardsBack.push(element);
  }
  const cardsBackHTML = cardsBack.join("");
  console.log(cardsBackHTML);
  console.log(backSideElement);
  backSideElement.innerHTML = cardsBackHTML;
}

renderStartPage();
