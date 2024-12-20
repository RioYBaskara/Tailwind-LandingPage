/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}", "./assets/**/*.{html,js}"],
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

      footernavlg: [
        "16px",
        "24px",
        {
          fontWeight: "400",
        },
      ],
      footernavmd: [
        "10px",
        "16px",
        {
          fontWeight: "400",
        },
      ],
      footernav: [
        "6px",
        "8px",
        {
          fontWeight: "400",
        },
      ],

      footertitlelg: [
        "16px",
        "16px",
        {
          fontWeight: "400",
        },
      ],
      footertitlemd: [
        "12px",
        "16px",
        {
          fontWeight: "400",
        },
      ],
      footertitle: [
        "8px",
        "10px",
        {
          fontWeight: "400",
        },
      ],
    },
    extend: {
      backgroundImage: {
        hero: "url('./assets/img/Hero.jpg')",
        jadwal1: "url('./assets/img/musikoloji.jpg')",
        jadwal2: "url('./assets/img/water.jpg')",
      },
      colors: {
        base: "#F6F6EC",
        basehover: "#E0E0D4",

        second: "#EFEDDF",

        accent: "#C2B280",
        accent2: "#071531",

        hover1: "#800020",
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
