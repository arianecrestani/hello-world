module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ringWidth: {
        '5': '5px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
