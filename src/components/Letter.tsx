interface LetterProps {
  value: string;
  type: string;
}

const Letter = ({ value, type }: LetterProps) => {
  return (
    <div
      className={`text-3xl font-bold border-2 border-neutral p-5 justify-center content-center items-center flex text-white ${type} w-14 h-14`}
    >
      {value}
    </div>
  );
};

export default Letter;
