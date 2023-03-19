export interface GuessType {
  value: string;
  types: string[];
}

export interface WordsPropsType {
  value: string;
  guesses: GuessType[];
}

export interface WordPropsType {
  value: string;
  done: boolean;
  types: string[];
}

export interface LetterPropsType {
  value: string;
  type: string;
}

export interface KeyType {
  [key: string]: string;
}

export interface KeyboardPropsType {
  types: KeyType;
}
