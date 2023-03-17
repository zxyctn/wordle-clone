/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dracula]'],
          '--rounded-btn': '0.35rem', // border radius rounded-btn utility class, used in buttons and similar element
        },
      },
    ],
  },
};
