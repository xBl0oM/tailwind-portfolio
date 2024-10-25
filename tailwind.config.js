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
      backgroundImage: {
        'parallax': 'url("/src/Assets/teamPicture.jpg")',
        'parallax-2': 'url("/src/Assets/teamPicturePhone.jpg")',
        'goal-Parallax':'url("/src/Assets/floorballGoal.mp4")',
        'jool-parallax': 'url("/src/Assets/jool.jpeg")',
    },
    backgroundVideo :{
      'goal-Parallax':'url("/src/Assets/floorballGoal.mp4")'
    }
  },
  plugins: [],
}
}