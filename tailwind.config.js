/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors : {
          dark : "  #121212",
          "dark-lighten": "#333335",
          "dark-blue" : "#121433"
           
       }
    },
  },
  plugins: [],
}
