/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,njk,md}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'other': '#64748b',
        'fanda': '#faf6cf',
      },
    },
  },
  plugins: [],
}

