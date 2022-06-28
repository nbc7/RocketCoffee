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
        gray: {
          200: '#E1E1E6',
          500: '#A8A8B3',
          900: '#29292E',
        },
      },
    },
  },
  plugins: [],
};
