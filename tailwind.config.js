/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#6D5BD0",
        secondary: "#3B3B3B",
        tertiary: "#6E6893",
        statusbg: "#E6E6F2",
        statusbgPaid: "#CDFFCD",
        statusOverduebg: "#FFE0E0",
        statusOverdueText: "#D30000",
        statusTextColor : "#007F00",
        
      },
    },
  },
  plugins: [],
}
