/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'active-link': '#FF7F3E', // Change this to your desired active link color
        lightText: "#c4cfde",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

