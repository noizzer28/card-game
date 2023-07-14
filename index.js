import './styles.css'
import Deck from './components/deck.js'
let gameLevel = null
const gamecontainer = document.querySelector('.game')
const deck = Object.values(new Deck()).flat()
let newDeck = []
let firstCard
let secondCard
let firstCardValue
let secondCardValue
let moves = 0
let minutes = 0
let seconds = 0
let interval
let secondsValue
let minutesValue

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
                renderGamePlay()
            }
        })
    }
}

function renderGamePlay() {
    getNewDeck(gameLevel)
    const timeValue = document.getElementById('timeValue')
    setTimeout(() => {
        interval = setInterval(() => {
            timeGenerator()
        }, 1000)
    }, 5000)

    const gamecontainer = document.querySelector('.game-container')
    gamecontainer.innerHTML = newDeck
        .map((card) => {
            return ` 
      <div class="card-container" data-value ='${card.suit.name + card.value}'>
      <div class="card-back">
      <img src="./static/cover.jpg"></img>
      </div>
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

    const cards = document.querySelectorAll('.card-container')
    cards.forEach((card) => {
        card.classList.add('flipped')
        setTimeout(() => {
            card.classList.remove('flipped')
            card.addEventListener('click', () => {
                if (!card.classList.contains('matched')) {
                    card.classList.add('flipped')
                    if (!firstCard) {
                        firstCard = card
                        firstCardValue = card.getAttribute('data-value')
                    } else {
                        secondCard = card
                        secondCardValue = card.getAttribute('data-value')
                        if (firstCardValue === secondCardValue) {
                            firstCard = null
                            secondCard = null
                            moves += 1
                            if (moves == gameLevel) {
                                setTimeout(() => {
                                    endGame(true)
                                }, 1000)
                            }
                        } else {
                            setTimeout(() => {
                                firstCard = null
                                secondCard = null
                                endGame(false, cards)
                            }, 1500)
                        }
                    }
                }
            })
        }, 5000)
    })

    document.getElementById('button').addEventListener('click', () => {
        location.reload()
    })
}

renderStartPage()
function getNewDeck(gameLevel) {
    const tempDeck = []

    for (let i = 0; i < gameLevel; i++) {
        const randomIndex = Math.floor(Math.random() * deck.length)
        tempDeck.push(deck[randomIndex])
    }
    newDeck = [...tempDeck, ...tempDeck]
    for (let i = newDeck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        ;[newDeck[i], newDeck[randomIndex]] = [newDeck[randomIndex], newDeck[i]]
    }
    return newDeck
}

const timeGenerator = () => {
    seconds += 1
    if (seconds >= 59) {
        minutes += 1
        seconds = 0
    }
    secondsValue = seconds < 10 ? `0${seconds}` : seconds
    minutesValue = minutes < 10 ? `0${minutes}` : minutes
    timeValue.innerHTML = `${minutesValue}:${secondsValue}`
}

function endGame(win, cards) {
    if (!win) {
        cards.forEach((card) => {
            card.classList.remove('flipped')
        })
    }
    clearInterval(interval)
    const resultModal = document.querySelector('.result')
    resultModal.style.visibility = 'visible'
    resultModal.style.opacity = '1'
    resultModal.innerHTML = `<div class="result_modal">
        <img src="${
            win ? './static/celebration.png' : './static/dead.png'
        }" alt="no">
        <h1>Вы ${win ? 'выиграли' : 'проиграли'}</h1>
        <p class="result-text">Затраченное время</p>
        <p class="result-time">${minutesValue}:${secondsValue}</p>
        <button id="endButton" class="button">Играть снова</button>
    </div>`
    document.getElementById('endButton').addEventListener('click', () => {
        location.reload()
    })
}
