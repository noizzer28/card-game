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
let minutes

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
        }, 5000)

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
                        firstCard.classList.add('matched')
                        secondCard.classList.add('matched')
                        firstCard = null
                        secondCard = null
                        moves += 1
                        console.log(gameLevel)
                        if (moves == gameLevel) {
                            setTimeout(() => {
                                alert('Вы выиграли')
                                location.reload()
                            }, 1000)
                        }
                    } else {
                        setTimeout(() => {
                            firstCard.classList.remove('flipped')
                            secondCard.classList.remove('flipped')
                            firstCard = null
                            secondCard = null
                            alert('Вы проиграли')
                            location.reload()
                        }, 1000)
                    }
                }
            } else {
            }
        })
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
    //minutes logic
    if (seconds >= 60) {
        minutes += 1
        seconds = 0
    }
    //format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`
}
