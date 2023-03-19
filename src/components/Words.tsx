import { WordsPropsType } from "../types";
import Word from "./Word";

const Words = ({ value, guesses }: WordsPropsType) => {
  const emptyTypes = ["default", "default", "default", "default", "default"];
  const noneTypes = ["none", "none", "none", "none", "none"];

  return (
    <div className="grid gap-1.5 place-content-center">
      {guesses.map((guess, index) => (
        <Word
          value={guess.value}
          types={guess.types}
          done={true}
          key={index + "-" + guess.value}
        />
      ))}
      {guesses.length < 6 && (
        <Word value={value} types={emptyTypes} done={false} />
      )}
      {guesses.length < 6 &&
        [...Array(5 - guesses.length)].map((_, index) => (
          <Word value="" done={false} types={noneTypes} key={index} />
        ))}
    </div>
  );
};

export default Words;
