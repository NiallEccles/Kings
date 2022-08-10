import "./style.css";
import { deck, pickCard, numOfKingsUsed, newDeck } from "./Deck";
import { animate, spring } from "motion";
import { Card } from "./Card";

const cardImg = document.querySelector("#card")!;
const newCard = document.querySelector("#newCard");
const numKings = document.querySelector("#numKings")!;
const remainingCards = document.querySelector("#remainingCards")!;
const newGame = document.querySelector("#newGame");

newGame?.addEventListener("click", () => {
  newDeck();
  numKings.innerHTML = String(0);
  remainingCards.innerHTML = String(52);
  cardImg.setAttribute("src", "");
  drawCard(pickCard());
});

newCard?.addEventListener("click", () => {
  drawCard(pickCard());
});

const drawCard = (card: Card) => {
  if (card) {
    // console.log(numOfKingsUsed);
    remainingCards.innerHTML = String(deck.length);
    numKings.innerHTML = String(numOfKingsUsed);
    cardImg?.setAttribute("src", `/cards/${card.suit}/${card.value}.svg`);
    animate(
      cardImg,
      { transform: ["rotate(360deg)", "none"] },
      { easing: spring() }
    );
  } else {
    console.log("out of cards");
  }
};

drawCard(pickCard());
