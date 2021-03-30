const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
  
      colors: {
        back: "#F8F8F8",
        main: "#FFFFFF",
        rose: colors.red[500],
        tea: "#e0ac7e",
        pink: colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
