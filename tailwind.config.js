const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      pagesBG: '#1A1C26',
      navBG: '#272932',
      purple: '#8C67F6',
      purpleToGrad: '#53348D',
      gray: '#8F8F8F',
      white: colors.white,
      transparent: colors.transparent,
      green: colors.green,
      red: colors.red,
    },
    extend: {
      keyframes: {
        casinoSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        casinoSpin: 'casinoSpin 3s ease-in',
      },
    },
  },
  plugins: [],
}
