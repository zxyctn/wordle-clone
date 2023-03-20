import { toast } from "react-toastify";

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

export const isValid = (guess: string) => {
  return words.findIndex((item) => guess.toLowerCase() === item) !== -1;
};

export const customToast = (value: string, autoClose:number|false=500) =>
  toast(value, {
    autoClose: autoClose,
    position: "top-center",
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    bodyClassName: "text-center",
    className: "w-max mx-auto",
    closeButton: false,
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "light"
      : "dark",
  });
