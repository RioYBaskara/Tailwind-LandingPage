/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      head1: ["47.78px", "56px"],
      head2: ["39.81px", "48px"],
      head3: ["33.18px", "40px"],
      head4: ["27.65px", "32px"],
      head5: ["23.04px", "32px"],
      head6: ["19.2px", "24px"],

      prsmall: [
        "13.33px",
        "16px",
        {
          fontWeight: "400",
        },
      ],
      prregular: [
        "16px",
        "16px",
        {
          fontWeight: "400",
        },
      ],
      prlarge: [
        "19.2px",
        "24px",
        {
          fontWeight: "400",
        },
      ],
    },
    extend: {
      colors: {
        base: "#F6F6EC",

        second: "#EFEDDF",

        accent: "#C2B280",
        accent2: "#071531",

        hover: "#4d0013",
      },
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
