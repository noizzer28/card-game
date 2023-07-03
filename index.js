import { renderGame } from "./components/startGame.js";

let gameLevel = null;
const app = document.getElementById("app");


function renderStartPage() {
  app.innerHTML = `<div class="start-box">
    <h1 class="start-box-text">Выбери сложность</h1>
    <form>
        <div class="start-box-flex">
            <label>
                <input type="radio" class="start-box-radio" id="option1" name="option" value="1">
                <div class="start-box-number">1</div>
            </label>
            <label>
                <input type="radio" class="start-box-radio" id="option2" name="option" value="2">
                <div class="start-box-number">2</div>
            </label>
            <label>
                <input type="radio" class="start-box-radio" id="option3" name="option" value="3">
                <div class="start-box-number">3</div>
            </label>
        </div>
        <button class="start-box-button button">Старт</button>
      </form>ч
    </div>`;

  const startButton = document.querySelector(".start-box-button");
  const menuOptions = document.querySelectorAll(".start-box-radio");
  for (const menuOption of menuOptions) {
    startButton.addEventListener("click", () => {
      if (menuOption.checked) {
        gameLevel = menuOption.value;
        renderGame({
            app,
            gameLevel,
        })
      }
    });
  }
}

renderStartPage();
