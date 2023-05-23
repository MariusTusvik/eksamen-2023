/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#02070b",
        secondary: "#0b161a",
        accent: "#40eef8",
        secondaryAccent: "#2c5a7b",
        textWhite: "#f1fefd",
        offWhite: "#bed1d5",
      },
    },
  },
  plugins: [],
};