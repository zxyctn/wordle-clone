import { KeyboardPropsType, KeyType } from "../types";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-return-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              ) : letter === "Backspace" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
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
