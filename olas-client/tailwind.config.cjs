/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A78C3',
        'primary-dark': '#1C4A87',
        highlight: '#D4B440',
        accent: '#8A6B4F'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
