/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        red: ['Red Rose'],
        saira: ['Saira Stencil One'],
        zen: ['Zen Dots'],
        itc: ['Bauhaus Modern'],
        harlow: ['Harlow Solid Italic'],
      },
    },
  },
  plugins: [require("daisyui")],
}

