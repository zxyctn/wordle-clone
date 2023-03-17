import React from 'react';

const Keyboard = () => {
  const rows = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    ['ENTER', ...'ZXCVBNM'.split(''), '<-'],
  ];

  return (
    <div className='my-5 grid gap-1'>
      {rows.map((row) => (
        <div
          key={row.toString()}
          className={`gap-1 mx-auto flex w-screen justify-center`}
        >
          {...row.map((letter) => (
            <button
              key={letter}
              className='btn text-xl shrink content-center py-10 px-2 w-10 min-w-max'
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
