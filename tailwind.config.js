module.exports = {
  mode: 'jit',

  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Inter'],
      },
      colors: {
        marron: '#333333',
        vert: '#04DDB2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
