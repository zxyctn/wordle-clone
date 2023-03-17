import Letter from './Letter';

interface WordProps {
  value: string;
  done: boolean;
}

const Word = ({ value, done }: WordProps) => {
  return (
    <div className='flex gap-1.5'>
      {value.split('').map((letter) => (
        <Letter value={letter} type='bg-transparent' />
      ))}
      {[...Array(5 - value.length)].map((_) => (
        <Letter value='' type='' />
      ))}
    </div>
  );
};

export default Word;
