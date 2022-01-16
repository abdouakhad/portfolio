var defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Inter'],
      },
      colors: {
        marron: '#333333',
        vert: '#04DDB2',
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
