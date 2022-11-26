/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './scripts/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-lg': "url('/images/bg-mobile-light.jpg')",
      },
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
