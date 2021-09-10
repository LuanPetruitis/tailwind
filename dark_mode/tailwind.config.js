const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  // or 'media' -> paga do navegador or 'class' -> pega da tag html se tem a classe dark
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        rose: colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
