/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,njk,md}"],
  darkMode: 'selector',
  theme: {
    fontSize: {
      sm: '0.875rem',
      base: '0.9rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
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

