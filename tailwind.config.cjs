/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,md,mdx,html,jsx,tsx,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
