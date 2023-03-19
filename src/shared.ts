import words from "./words";

export const getRandomWord = () =>
  words[Math.floor(Math.random() * words.length)];

export const testGuess = (guess: string, word: string) => {
  const types: string[] = [];

  guess.split("").forEach((letter: string, index: number) => {
    if (word.includes(letter)) {
      types.push(guess[index] === word[index] ? "matches" : "exists");
    } else {
      types.push("nonexistent");
    }
    word = word.replace(letter, "_");
  });

  return types;
};
