/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}
