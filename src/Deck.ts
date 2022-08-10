import { Card, cardValues } from "./Card";
import { Suit } from "./Suit";

type Deck = Card[];
const usedCards: Deck = [];
export let numOfKingsUsed: number = 0;

const mkDeck = (): Deck => {
  const deck = [] as Card[];
  for (const s of [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades]) {
    for (const v of cardValues) {
      deck.push({
        value: v,
        suit: s,
      });
    }
  }
  return deck;
};

export let deck = mkDeck();

export const pickCard = (): Card => {
  const randomNum = Math.floor(Math.random() * deck.length);
  const randomCard = deck[randomNum];
  usedCards.push(randomCard);
  console.log(randomCard);
  if(randomCard.value === 13){
    numOfKingsUsed++;
  }
  deck.splice(randomNum, 1);
  return randomCard;
};

export const newDeck = (): Deck => {
  deck = mkDeck();
  return deck;
}