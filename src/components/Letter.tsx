interface LetterProps {
  value: string;
  type: {
    bg: string;
    border: string;
  };
}

const Letter = ({ value, type }: LetterProps) => {
  return (
    <div
      className={`${type.bg} ${type.border} w-14 h-14 grid border-2 text-3xl font-bold`}
    >
      <div className='mt-1.5 mx-auto'>{value}</div>
    </div>
  );
};

export default Letter;
