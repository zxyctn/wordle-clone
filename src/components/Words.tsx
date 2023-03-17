import { getRandomWord } from '../shared';
import Word from './Word';

interface WordsProps {
  value: string;
}

const Words = ({ value }: WordsProps) => {
  const guesses: string[] = [];

  const word = getRandomWord();

  return (
    <div className='grid gap-2 place-content-center'>
      <Word value='' done={false} />
      <Word value='' done={false} />
      <Word value='' done={false} />
      <Word value='' done={false} />
      <Word value='' done={false} />
      <Word value='' done={false} />
    </div>
  );
};

export default Words;
