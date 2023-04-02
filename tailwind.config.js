/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '390': '390px'
      },
      height: {
        '10%': '10%'
      },
      fontFamily: {
        'damn': ['DAMN', 'sans-serif'],
        'gilroy': ['Gilroy-ExtraBold', 'sans-serif']
      }
    },
  },
  plugins: [],
}

