const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      maxHeight: {
        '640': '640px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
