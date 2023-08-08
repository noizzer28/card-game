import Deck from './components/deck'
const { getNewDeck, timeGenerator, endGame } = require('./index')

describe('deck creation', () => {
    it('should have 36 cards in array', () => {
        const cards = new Deck()

        expect(cards.card).toHaveLength(36)
    })

    it('should create a deck with 10 cards', () => {
        const gameLevel = 5
        const newDeck = getNewDeck(gameLevel)
        expect(newDeck).toHaveLength(10)
    })
})

describe('timeGenerator', () => {
    test('should display the seconds and minutes correctly', () => {
        document.body.innerHTML = `<div id="timeValue">00:00</div>
        `
        const timeValue = document.getElementById('timeValue')!
        console.log(timeValue.innerHTML)

        timeGenerator(timeValue)

        expect(timeValue.innerHTML).toBe('00:01')
    })
})

describe('endGame', () => {
    test('should display the result modal window correctly', () => {
        document.body.innerHTML = `
        <div class="result" style="visibility: hidden; opacity: 0;"></div>
      `

        endGame(true, [])

        const resultModal: HTMLElement = document.querySelector('.result')!
        expect(resultModal.style.visibility).toBe('visible')
        expect(resultModal.style.opacity).toBe('1')

        expect(resultModal.innerHTML).toContain('выиграли')
    })
})
