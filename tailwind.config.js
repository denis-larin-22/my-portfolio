/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: '1024px',
    },
    colors: {
      'dark': '#1D1D1D;',
      'grey-sign': '#515152',
      'grey-text': '#8D8D8D',
      'light-green': '#08FDD8',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'aurore': ['La Belle Aurore', 'serif'],
    },
    fontSize: {
      'signatures': ['1.25rem', {
        lineHeight: 'normal',
        fontWeight: '400'
      }],
    },
    extend: {},
  },
  plugins: [],
}

