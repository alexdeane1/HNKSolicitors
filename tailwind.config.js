const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './templates/**/*.twig',
    './templates/*.twig',
    './resources/**/*.js',
  ],

  theme: {
    extend: {
      fontFamily: {
          sans: ['Nunito', ...defaultTheme.fontFamily.sans],
          muli: ['muli', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif']
      },
      colors: {
          transparent: 'transparent',
          primary: '#005DAC',
          secondary: '#F0F0F0',
      },
  },
  },
  plugins: [],
}
