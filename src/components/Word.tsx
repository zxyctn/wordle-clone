import Letter from './Letter';

interface WordProps {
  value: string;
  done: boolean;
}

const Word = ({ value, done }: WordProps) => {
  const types = {
    none: {
      bg: 'bg-transparent',
      border: 'border-neutral',
    },
    default: {
      bg: 'bg-transparent',
      border: 'border-primary',
    },
  };

  return (
    <div className='flex gap-1.5'>
      {value.split('').map((letter, index) => (
        <Letter
          value={letter}
          type={types.default}
          key={`${letter}-${index}`}
        />
      ))}
      {[...Array(5 - value.length)].map((_, index) => (
        <Letter value='' type={types.none} key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default Word;
