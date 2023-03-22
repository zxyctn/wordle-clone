/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      dark: {
        ...require('daisyui/src/colors/themes')['[data-theme=dracula]'],
        '--rounded-btn': '0.35rem',
      },
      light: {
        ...require('daisyui/src/colors/themes')['[data-theme=light]'],
        '--rounded-btn': '0.35rem',
      }
    }, ],
  },
};