/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        main:["Raleway", "serif"],
        style:["Poppins", "serif"]
      },
      colors:{
        purple:"#c770f0",
        blue:"#27508C"
      }
    },
  },
  plugins: [],
}