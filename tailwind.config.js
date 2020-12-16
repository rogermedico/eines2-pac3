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
      'tickets': '0 4px 8px 0 rgba(256, 198, 0, .1), 0 6px 20px 0 rgba(256, 198, 0, .1)',
      'artists': '0 4px 8px 0 rgba(256, 198, 0, .7), 0 6px 20px 0 rgba(256, 198, 0, .7)'
    },
    container: {
      center: true,
    },
    flex: {
      'artists-xs': '0 1 80%',
      'artists-md': '0 1 40%',
      'artists-lg': '0 1 25%'
    },

    extend: {
      colors: {
        'primary': '#ffc600',
        'secondary': '#8c00ff',
        'background-color-light': '#101010',
      },
      // backgroundImage: {
      //   'stage': "url('/src/assets/images/background.jpg')",
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
      maxWidth: {
        '250px': '250px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
