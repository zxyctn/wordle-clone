import { KeyType, WordPropsType } from "../types";
import Letter from "./Letter";

const Word = ({ value, done, types }: WordPropsType) => {
  const typesClasses: KeyType = {
    none: "bg-transparent border-neutral opacity-25 dark:opacity-100",
    default: "bg-transparent border-neutral dark:border-gray-300",
    matches: "bg-success border-success dark:text-black",
    exists: "bg-warning border-warning dark:text-black",
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
