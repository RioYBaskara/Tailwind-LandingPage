/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        base: "#F6F6EC",

        second: "#EFEDDF",

        accent: "#C2B280",
        accent2: "#800020",

        hover: "#4d0013",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
