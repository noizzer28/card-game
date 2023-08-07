import Deck from './components/deck'
const { getNewDeck } = require('./index')

it('should have 36 cards in array', () => {
    const cards = new Deck()

    expect(cards.card).toHaveLength(36)
})

it('should create a deck with 10 cards', () => {
    const gameLevel = 5
    const newDeck = getNewDeck(gameLevel)
    expect(newDeck).toHaveLength(10)
})
