/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC', // blue
          light: '#3385ff',
          dark: '#004c99'
        },
        secondary: '#00A859' // Kenyan green
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
