import { LetterPropsType } from "../types";

const NavbarWord = ({ value, type }: LetterPropsType) => {
  return (
    <div className="absolute flex gap-0.5 right-0 -bottom-4">
      {value.split("").map((letter) => {
        return (
            <div
            key={`${letter}-navbar`}
            className={`${type} w-5 h-5 grid border-2 text-xs font-bold`}
          >
            <div className="my-auto mx-auto">{letter}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarWord;
