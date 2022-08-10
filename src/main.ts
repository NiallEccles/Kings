import "./style.css";
import { deck, pickCard, numOfKingsUsed, newDeck } from "./Deck";
import { animate, spring } from "motion";

const cardImg = document.querySelector("#card")!;
const newCard = document.querySelector("#newCard");
const numKings = document.querySelector('#numKings')!;
const remainingCards = document.querySelector('#remainingCards')!;
const newGame = document.querySelector('#newGame');

newGame?.addEventListener("click", () => {
  newDeck();
});

newCard?.addEventListener("click", () => {
  const card = pickCard();
  if (card) {
    // console.log(numOfKingsUsed);
    remainingCards.innerHTML = String(deck.length);
    numKings.innerHTML = String(numOfKingsUsed);
    cardImg?.setAttribute("src", `public/cards/${card.suit}/${card.value}.svg`);
    animate(
      cardImg,
      { transform: ["rotate(360deg)", "none"] },
      { easing: spring() }
    );
  } else {
    console.log("out of cards");
  }
});
