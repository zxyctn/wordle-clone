import { useEffect, useState } from 'react';

import './App.css';
import Keyboard from './components/Keyboard';
import Navbar from './components/Navbar';
import Words from './components/Words';

const App = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;
      if (/^[a-zA-Z]$/.test(key)) {
        if (input.length < 5) {
          setInput((value) => value + key.toUpperCase());
        }
      } else if (key === 'Enter') {
        if (input.length === 5) {
          //
        }
      } else if (key === 'Backspace') {
        setInput((value) => value.slice(0, -1));
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setInput, input]);
  return (
    <div>
      <Navbar />
      <Words value={input} />
      <Keyboard />
    </div>
  );
};

export default App;
