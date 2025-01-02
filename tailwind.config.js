/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,njk,md}"],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: ['"Bitter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

