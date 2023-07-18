import Deck from './components/deck'

it('should have 36 cards in array', () => {
    const cards = new Deck()

    expect(cards.card).toHaveLength(36)
})
