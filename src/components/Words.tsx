import { getRandomWord } from '../shared';
import Word from './Word';

interface WordsProps {
  value: string;
}

const Words = ({ value }: WordsProps) => {
  const guesses: string[] = [];

  const word = getRandomWord();

  console.log(value);

  return (
    <div className='grid gap-1.5 place-content-center'>
      {guesses.map((word, index) => (
        <Word value={word} done={true} key={index + '-' + word} />
      ))}
      <Word value={value} done={false} />
      {[...Array(5 - guesses.length)].map((_, index) => (
        <Word value='' done={false} key={index} />
      ))}
    </div>
  );
};

export default Words;
