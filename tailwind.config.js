/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,njk,md}"],
  theme: {
    extend: {
      fontFamily: {
        bitter: ['"Bitter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

