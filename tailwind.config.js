/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F5E6D3',
        textlight: '#3D2817',
        primarydark: '#2C1810',
        textdark1: '#8B6F47',
        textdark2: '#E8DCC6',
        vintage: {
          cream: '#F5E6D3',
          beige: '#E8DCC6',
          sepia: '#8B6F47',
          rust: '#C97D60',
          mustard: '#D4A574',
          dustyrose: '#C9A9A6',
          sage: '#7A8471',
          darkbrown: '#3D2817',
          agedpaper: '#F0E6D8',
        },
      },
    },
  },
  plugins: [],
}