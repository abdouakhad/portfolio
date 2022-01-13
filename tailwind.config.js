module.exports = {
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
        beize: '#3E3E3E',
        vert: '#34D399',
        vertClair: '#10B981',
        white: '#ffffff',
        black: '#000000',
        noir: '#111827',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
