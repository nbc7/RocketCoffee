/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blurMobile: 'url(/src/assets/blur-mobile.png)',
        blur: 'url(/src/assets/Background-blur.png)',
        blur1: 'url(/src/assets/blur-1.png)',
        blur2: 'url(/src/assets/blur-2.png)',
      },
      fontFamily: {
        sans: 'Manrope, sans-serif',
      },
      colors: {
        purple: {
          500: '#8257E5',
        },
      },
    },
  },
  plugins: [],
};
