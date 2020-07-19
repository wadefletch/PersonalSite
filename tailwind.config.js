module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      borderRadius: {
        'xl': '1rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
  },
  variants: {},
  plugins: [],
}
