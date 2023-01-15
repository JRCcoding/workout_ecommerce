/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ['Pacifico', 'cursive'],
        Museo: ['museo-sans-rounded', 'sans-serif'],
        Pedestria: ['pedestria-mvb', 'sans-serif'],
        Multi: ['multi-display', 'sans-serif'],
      },
    },
    colors: {
      Logo: '#B849D8',
      Navbar: '#593C60',
      Navtitle: '#F4F2F2',
      AccentText: '#1b161f',
      LightBG: '#ebeeef',
    },
  },
  plugins: [],
}
