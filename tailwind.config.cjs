/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,ts,js}', './index.html'],
  theme: {
    colors: {
      'soft-read': '#ec775f',
      cyan: '#76b5bc',
      'dark-brown': '#382314',
      'medium-brown': '#93867b',
      cream: '#f8e9dd',
      'very-pale-orange': '#fffaf5'
    },
    fontFamily: {
      'dm-sans': 'DM Sans'
    },
    extend: {}
  },
  plugins: []
}
