const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
    },
    safelist: [
        {
          pattern: /./,
          variants: ['responsive', 'dark'],
        },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
