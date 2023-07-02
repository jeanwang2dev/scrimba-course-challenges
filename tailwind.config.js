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
        warning: "#FBBF24",
        warningLight: "#FFFBEB",
        danger: "#F87171",
        dangerLight: "#FEF2F2",
        success: "#047857",
        successLight: "#ECFDF5"
      }
    },
  },
  plugins: [],
}

