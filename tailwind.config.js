/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0.3rem 1.5rem 0.1rem rgba(0, 0, 0, 0.8)',
        'hov': '0rem 0rem 0rem 0.5rem #f5e204'
      },
      colors:{
        "cv": "#e0e0d9",
        "cv-side":"#8a8641",
        "cv-fondo":"#f9f9f9",
        "cv-text":"#505050",
        "nav":"rgba(28, 28, 28, 0.96)",
        "yellow1":"#f5e204",
        "yellow2":"#ffeb05"
      },
    },
  },
  plugins: [],
}

