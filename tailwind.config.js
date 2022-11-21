/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors : {
          dark : "  #121212",
          "dark-lighten": "#333335",
          "dark-blue" : "#121433",
          "red-dark": "hsl(360, 67%, 44%)",
          "red-light": "hsl(360, 71%, 66%)",
          primary : "#DD3A37" ,
          "dark-lighten-2": "#49494b",
           
       }
    },
  },
  plugins: [],
}
