/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1E2A3B',
        'gray-light': '#EDF2F7',
        'gray-dark': '#4A5568',
      },

    },
  },
  plugins: [],
}