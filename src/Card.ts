import { Suit } from "./Suit";

export const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
type ValueTuple = typeof cardValues;
type Value = ValueTuple[number];

// type Value = number[]

export const valueSymbols: { [K in Value]: string } = {
  1: "Ace",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Jack",
  12: "Queen",
  13: "King",
};

export interface Card {
  value: Value;
  suit: Suit;
}