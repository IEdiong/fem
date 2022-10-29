/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        body: 'hsl(218, 23%, 16%)',
        article: 'hsl(217, 19%, 24%)',
        neon: 'hsl(150, 100%, 66%)',
      },
    },
  },
  plugins: [],
};
