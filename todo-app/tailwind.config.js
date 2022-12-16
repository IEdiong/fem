/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './scripts/*.js'],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-start': 'hsl(192, 100%, 67%)',
        'check-end': 'hsl(280, 87%, 65%)',
        'check-gray': 'hsl(236, 33%, 92%)',
        'light-gray': 'hsl(0, 0%, 98%)',
        'dark-gray': 'hsl(233, 11%, 84%)',
        'dark-gray-50': 'hsl(236, 9%, 61%)',
        'dark-gray-100': 'hsl(235, 19%, 35%)',
      },
      backgroundImage: {
        'mobile-lg': "url('/images/bg-mobile-light.jpg')",
        'icon-check': "url('/images/icon-check.svg')",
      },
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        '3xl': '0px 5px 30px 1px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
