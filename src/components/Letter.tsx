import { LetterPropsType } from "../types";


const Letter = ({ value, type }: LetterPropsType) => {
  return (
    <div
      className={`${type} w-14 h-14 grid border-2 text-3xl font-bold`}
    >
      <div className="my-auto mx-auto">{value}</div>
    </div>
  );
};

export default Letter;
