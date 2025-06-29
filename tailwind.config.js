/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors'); 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray, // pakai semua shades bawaan Tailwind        
      },
    },
  },
  plugins: [],
}
