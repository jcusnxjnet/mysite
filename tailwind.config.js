/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,njk,md}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'link': '#0284c7',
        'other': '#64748b',
        'line': '#cbd5e1'
       },
    },
  },
  plugins: [],
}

