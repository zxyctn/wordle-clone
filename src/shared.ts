import words from './words';

export const getRandomWord = () =>
  words[Math.floor(Math.random() * words.length)];
