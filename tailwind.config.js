/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth :{
        container : '1100px'
    },
      fontFamily: {
        'poppins': ['"Poppins"', "sans-serif"],
      },
      colors: {
        navbar: 'rgba(28, 30, 83, 1)',
        navbarhover: '#BBBBCB',
      },
      backgroundImage: {
        'project': " linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)",
        'team': " linear-gradient(329.39deg, rgba(82, 57, 250, 1), rgba(255, 255, 255, 0) 103.96%)",
      },
    },
  },
  plugins: [],
}