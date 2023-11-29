/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        auto_fill : 'reapeat(auto_fill, minmax(300px, 1fr))'
      },
      colors : {
        main_color : '#212529',
        black_1 : '#212529',
        black_2 : "#343A40",
        black_3 : "#495057",
        title_white : '#F8F9FA'

      }
    },
  },
  plugins: [],
}