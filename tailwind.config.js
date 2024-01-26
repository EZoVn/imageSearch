/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        primary: "#0D1B2A",
        secondary: "#1B263B",
        tertiary: "#415A77",
        quaternary: "#778DA9",
        quinary: "#E0E1DD",
      }
    },

  },
  plugins: [],
}

