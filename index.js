import Deck from './components/deck.js'
let gameLevel = null
const gamecontainer = document.querySelector('.game')

const deck = Object.values(new Deck()).flat()
let newDeck = []
const cardsBack = []

function renderStartPage() {
    const startContainer = document.getElementById('start')
    const startButton = document.querySelector('.start-box-button')
    const menuOptions = document.querySelectorAll('.start-box-radio')

    for (const menuOption of menuOptions) {
        startButton.addEventListener('click', (event) => {
            event.preventDefault()
            if (menuOption.checked) {
                gameLevel = menuOption.value
                startContainer.style.display = 'none'
                gamecontainer.style.display = 'block'
                renderFrontSide()
                setTimeout(() => {
                    renderBackSide(gameLevel)
                }, 1000)
            }
        })
    }
}

function renderBackSide(gameLevel) {
    const backSideElement = document.querySelector('.back-side')
    for (let index = 0; index < gameLevel * 2; index++) {
        const element = `<div class="card-back"></div>`
        cardsBack.push(element)
    }
    backSideElement.innerHTML = cardsBack.join('')
}

function getNewDeck(gameLevel) {
    const tempDeck = []

    for (let i = 0; i < gameLevel; i++) {
        const randomIndex = Math.floor(Math.random() * deck.length)
        tempDeck.push(deck[randomIndex])
    }
    newDeck = [...tempDeck, ...tempDeck]
    console.log(tempDeck)
    for (let i = newDeck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        ;[newDeck[i], newDeck[randomIndex]] = [newDeck[randomIndex], newDeck[i]]
    }
    console.log(newDeck)
}

function renderFrontSide() {
    getNewDeck(gameLevel)
    const frontSideElement = document.querySelector('.front-side')
    frontSideElement.innerHTML = newDeck
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
      </div>`
        })
        .join('')

    const cardsFront = document.querySelectorAll('.card-item-front')
    for (const cardFront of cardsFront) {
        cardFront.addEventListener('click', () => {
            cardFront.style.zIndex = '1'
        })
    }

    document.getElementById('button').addEventListener('click', () => {
        location.reload()
    })
}

renderStartPage()
