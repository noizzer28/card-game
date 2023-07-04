const SUITES = [
  "../image/clubs.png",
  "../image/diamonds.png",
  "../image/hearts.png",
  "../image/spades.png",
];
const VALUES = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export default class Deck {
  constructor(cards = getDeck()) {
    this.card = cards;
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

function getDeck() {
  return SUITES.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
}
