/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx}', // src以下の全Reactファイル
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};