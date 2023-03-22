import { KeyboardPropsType, KeyType } from "../types";
import { ArrowLeft, ArrowReturnLeft } from "react-bootstrap-icons";

const Keyboard = ({ types }: KeyboardPropsType) => {
  const rows = [
    "qwertyuiop".split(""),
    "asdfghjkl".split(""),
    ["Enter", ..."zxcvbnm".split(""), "Backspace"],
  ];

  const typesClasses: KeyType = {
    default:
      "bg-opacity-20 text-black dark:text-white dark:bg-white/50 dark:hover:bg-white/30 border-opacity-10 hover:bg-opacity-30 hover:border-opacity-20",
    exists: "btn-warning",
    matches: "btn-success",
    nonexistent: "dark:text-white",
  };

  const handleClick = (letter: string) => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: letter,
      })
    );
  };

  return (
    <div className="my-5 grid gap-1 max-w-screen-sm mx-auto">
      {rows.map((row, index) => (
        <div
          key={row.toString()}
          className={`gap-1 mx-auto flex justify-center px-2 ${
            index !== 1 ? "w-full" : "w-11/12"
          }`}
        >
          {...row.map((letter) => (
            <button
              key={letter}
              onClick={() => handleClick(letter)}
              className={`${
                typesClasses[types[letter.toUpperCase()]]
              } font-bold text-xl btn  grow content-center min-w-0 w-0 py-8 px-0`}
            >
              {letter === "Enter" ? (
                <ArrowReturnLeft className="stroke-1 dark:stroke-white stroke-black" />
              ) : letter === "Backspace" ? (
                <ArrowLeft className="stroke-1 dark:stroke-white stroke-black" />
              ) : (
                letter.toUpperCase()
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
