/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const MyPlugin = plugin(function({addUtilities}) {
  addUtilities({
    ".bg-blurred": {
      backgroundColor: "rgba(245,245,245,0.8)",
    }
  })
})
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#01D28E',
        primaryPurple: '#6d28d9',
        primaryOrange: '#EF962D',
        primaryYellow: '#FFE05D',
        primaryBlue: '#3258a8',
        primaryBege: '#E6E5A3',
        secondaryGreen: '#7D8F69',
        tertiaryGreen: '#A9AF7E',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [MyPlugin],
}
