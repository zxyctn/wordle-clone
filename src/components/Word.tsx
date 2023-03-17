import Letter from './Letter';

interface WordProps {
  value: string;
  done: boolean;
}

const Word = ({ value, done }: WordProps) => {
  return (
    <div className='flex gap-2'>
      <Letter value='' type='' />
      <Letter value='' type='' />
      <Letter value='' type='' />
      <Letter value='' type='' />
      <Letter value='' type='' />
    </div>
  );
};

export default Word;
