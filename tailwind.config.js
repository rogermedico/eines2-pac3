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
    boxShadow: {
      'tickets': '0 4px 8px 0 rgba(256, 198, 0, .1), 0 6px 20px 0 rgba(256, 198, 0, .1)'
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
      },
      spacing: {
        'video': '56.25%'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
