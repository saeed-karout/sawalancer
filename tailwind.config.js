/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          glow: "#A4A0E4",
          dark: "#410F80",
          saturated: "#4319B9",
          medium: "#7055CA",
        },
        navy: {
          dark: "#0A0828",
          deep: "#20155C",
        },
        blue: {
          sky: "#368FDF",
          medium: "#1D45B3",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}