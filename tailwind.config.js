/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/*.html',
    "./src/**/*.html", 
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        'navy': '#1F2937',
        'pink': '#DA6AEC',
        'red':'#F43F5E',
        'blue':'#2F74DC',
        'green':'#22CD90',
        'white':'#ffffff',
        whitesmoke: '#f5f5f5',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

