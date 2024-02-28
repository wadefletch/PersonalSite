const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'posts/**/*.{md,mdx}',
  ],
  plugins: [require('@tailwindcss/typography')],
};
