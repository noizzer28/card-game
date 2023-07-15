import './styles.css'
import Deck from './components/deck.ts'
let gameLevel: string
const gamecontainer: HTMLElement = document.querySelector('.game')!
const timeValue = document.getElementById('timeValue')!
const deck = Object.values(new Deck()).flat()
let newDeck: any[] = []
let firstCard: object
let secondCard
let firstCardValue: any = ''
let secondCardValue: any = ''
let moves = 0
let minutes = 0
let seconds = 0
let interval: NodeJS.Timer
let secondsValue: string
let minutesValue: string

function renderStartPage(): void {
    const startContainer = document.getElementById('start')!
    const startButton: HTMLElement =
        document.querySelector('.start-box-button')!
    const menuOptions: NodeListOf<HTMLInputElement> =
        document.querySelectorAll('.start-box-radio')

    for (const menuOption of menuOptions) {
        startButton.addEventListener('click', (event) => {
            event.preventDefault()
            if (menuOption) {
                if (menuOption.checked) {
                    gameLevel = menuOption.value
                    startContainer.style.display = 'none'
                    gamecontainer.style.display = 'block'
                    renderGamePlay()
                }
            }
        })
    }
}

function renderGamePlay() {
    getNewDeck(gameLevel)

    setTimeout(() => {
        interval = setInterval(() => {
            timeGenerator()
        }, 1000)
    }, 5000)

    const gamecontainer = document.querySelector('.game-container')!
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
                            firstCard = []
                            secondCard = null
                            moves += 1
                            let movesString = moves.toString()
                            if (movesString == gameLevel) {
                                setTimeout(() => {
                                    endGame(true, cards)
                                }, 1000)
                            }
                        } else {
                            setTimeout(() => {
                                firstCard = []
                                secondCard = null
                                endGame(false, cards)
                            }, 1500)
                        }
                    }
                }
            })
        }, 5000)
    })
    const buttonElement = document.getElementById('button')!
    buttonElement.addEventListener('click', () => {
        location.reload()
    })
}

renderStartPage()
function getNewDeck(gameLevel) {
    const tempDeck: any[] = []

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
    secondsValue = seconds < 10 ? `0${seconds.toString()}` : seconds.toString()
    minutesValue = minutes < 10 ? `0${minutes.toString()}` : minutes.toString()
    timeValue.innerHTML = `${minutesValue}:${secondsValue}`
}

function endGame(win, cards) {
    if (!win) {
        cards.forEach((card) => {
            card.classList.remove('flipped')
        })
    }
    clearInterval(interval)
    const resultModal: HTMLElement = document.querySelector('.result')!
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
    document.getElementById('endButton')!.addEventListener('click', () => {
        location.reload()
    })
}
