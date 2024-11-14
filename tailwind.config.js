/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // primary60%
        ivory: "#FFFFF0",
        "antique-white": "#FAEBD7",
        // secondary30%
        "muted-sand": "#C2B280",
        "warm-taupe": "#A39277",
        // accent10%
        "deep-olive-green": "#556B2F",
        "burnt-sienna": "#8B4513",
        "burnt-orange": "#C04B1E",
        // testing
        "terra-cotta": "#E27D60", // Soft earthy orange
        "deep-burgundy": "#800020", // Elegant dark red
        "olive-green": "#808000", // Natural green
        "golden-ochre": "#C88A4E", // Warm golden yellow
        "charcoal-gray": "#36454F", // Deep gray for text
      },
      fontFamily: {
        serif: ['"Garamond"', "serif"],
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
