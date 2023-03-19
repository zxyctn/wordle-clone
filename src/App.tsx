import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Keyboard from "./components/Keyboard";
import Navbar from "./components/Navbar";
import Words from "./components/Words";
import { getRandomWord, testGuess } from "./shared";
import { GuessType, KeyType } from "./types";
import words from "./words";

const WORD = getRandomWord();

const keys: KeyType = {
  BACKSPACE: "default",
  ENTER: "default",
};
"QWERTYUIOPASDFGHJKLZXCVBNM"
  .split("")
  .forEach((letter) => (keys[letter] = "default"));

const isValid = (guess: string) => {
  return words.findIndex((item) => guess.toLowerCase() === item) !== -1;
};

const App = () => {
  const [input, setInput] = useState<string>("");
  const [guesses, setGuesses] = useState<GuessType[]>([]);
  const [solved, setSolved] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!solved) {
        const key = event.key;

        if (/^[a-zA-Z]$/.test(key)) {
          if (input.length < 5) {
            setInput((value) => value + key.toUpperCase());
          }
        } else if (key === "Enter") {
          if (input.length === 5 && isValid(input)) {
            const types = testGuess(input.toLowerCase(), WORD);
            if (input.toLowerCase() === WORD) {
              setSolved((_) => true);
            }
            input
              .toUpperCase()
              .split("")
              .forEach((letter, index) => {
                if (keys[letter] != "matches") {
                  if (keys[letter] != "exists") {
                    keys[letter] = types[index];
                  } else if (types[index] === "matches") {
                    keys[letter] = types[index];
                  }
                }
              });
            setGuesses((items) => {
              items = [
                ...items,
                {
                  types: types,
                  value: input.toUpperCase(),
                },
              ];
              setInput((_) => "");
              return items;
            });
            if (guesses.length === 5) {
              toast(WORD, {
                autoClose: false,
                position: "top-center",
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              setSolved((_) => true);
            }
          } else if (input.length < 5) {
            toast("Not enough letters", {
              position: "top-center",
              autoClose: 500,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            toast("Not in word list", {
              position: "top-center",
              autoClose: 500,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        } else if (key === "Backspace") {
          setInput((value) => value.slice(0, -1));
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [input, keys]);
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        limit={5}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Words value={input} guesses={guesses} />
      <Keyboard types={keys} />
    </div>
  );
};

export default App;
