/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // or whatever your source folder is
  ],
  theme: {
    extend: {},
  },
  
  plugins: [
    require('daisyui'), // ✅ this line enables DaisyUI
  ],
  darkMode: 'class', 
}
