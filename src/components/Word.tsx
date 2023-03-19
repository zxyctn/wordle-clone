import { KeyType, WordPropsType } from "../types";
import Letter from "./Letter";

const Word = ({ value, done, types }: WordPropsType) => {
  const typesClasses: KeyType = {
    none: "bg-transparent border-neutral opacity-25",
    default: "bg-transparent border-neutral",
    matches: "bg-success border-success",
    exists: "bg-warning border-warning",
    nonexistent: "bg-neutral border-neutral text-white",
  };

  return (
    <div className="flex gap-1.5">
      {value.split("").map((letter, index) => {
        return (
          <Letter
            value={letter}
            type={typesClasses[types[index]]}
            key={`${letter}-${index}`}
          />
        );
      })}
      {[...Array(5 - value.length)].map((_, index) => (
        <Letter value="" type={typesClasses.none} key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default Word;
