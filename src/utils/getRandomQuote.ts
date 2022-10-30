import { choraoQuotes } from "../data";

function getRandomIntInclusive(minValue: number, maxValue: number) {
  const min = Math.ceil(minValue);
  const max = Math.floor(maxValue);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomQuote() {
  const randomIndex = getRandomIntInclusive(0, choraoQuotes.length - 1);

  return choraoQuotes[randomIndex];
}
