/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        otro: ["Parkinsans", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        raro:['EduAUVICWANTArrows', "sans-serif"]
      },
    },
  },
  plugins: [],
};
