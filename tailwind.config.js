module.exports = {
  purge: [
    "./src/**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Raleway', 'arial', 'helvetica', 'sans-serif'],
      'serif': ['Roboto\\ Slab', 'georgia', 'times', 'serif'],
      'special': ['Gloria\\ Hallelujah', 'cursive']
    },
    extend: {
      colors: {
        'primary': '#ffc600',
        'secondary': '#8c00ff',
      },
      // backgroundImage: {
      //   'stage': "url('./src/assets/images/background.jpg')",
      // },
      gridTemplateColumns: {
        'home': 'minmax(50px, auto) repeat(6, 1fr) minmax(50px, auto)'
      },
      gridTemplateRows: {
        'home': 'repeat(6, auto)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
