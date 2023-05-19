/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const PrelinePlugin = require("preline/plugin")
const MyPlugin = plugin(function({addUtilities}) {
  addUtilities({
    ".bg-blurred": {
      backgroundColor: "rgba(245,245,245, 0.9)",
    }
  })
})
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f3e72',
        secondary: '#ffa500',
        tertiary: '#4066ff',
        quartiary: "#e6e6ff",
        gray: '#8c8b8b',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [MyPlugin, PrelinePlugin],
}
