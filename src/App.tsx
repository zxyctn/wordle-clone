import { useEffect, useState } from 'react';

import './App.css';
import Keyboard from './components/Keyboard';
import Navbar from './components/Navbar';
import Words from './components/Words';

const App = () => {
  return (
    <div>
      <Navbar />
      <Words value='' />
      <Keyboard />
    </div>
  );
};

export default App;
