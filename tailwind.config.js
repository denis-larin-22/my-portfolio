/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '510px',
      'sm':	'640px',
      'md': '768px',
      'lg':	'1024px',
      'xl':	'1280px',
      '2xl':	'1536px'
    },
    container: {
      screens: {
        '2xl': '1280px'
      },
      center: true,
      padding: '20px',
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'transparent-black': 'rgba(0, 0, 0, 0.8)',
      'dark': '#1D1D1D;',
      'grey-sign': '#515152',
      'grey': '#6E6E6E',
      'grey-bcg': 'rgb(18 18 18 / 74%)',
      'light-green': '#4aea37',
      'green': '#0F0',
      'green-gradient': 'linear-gradient(90deg, transparent, #0F0)'
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
      'm-3xl': ['6rem', {
        lineHeight: '105%',
        fontWeight: 600
      }],
      'm-2xl': ['5rem', {
        lineHeight: '105%',
        fontWeight: 600,
      }],
      'm-xl': ['3rem', {
        lineHeight: 'normal',
        fontWeight: '400'
      }],
      'm-md': ['1.2rem', {
        lineHeight: '164%',
        fontWeight: '400'
      }]
    },
    extend: {
      boxShadow: {
        'neon-link': '0 0 10px #0F0',
      }
    },
  },
  plugins: [],
}

