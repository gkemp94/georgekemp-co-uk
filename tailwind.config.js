/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/**.tsx", "./components/**/**.tsx"],
  theme: {
    fontFamily: {
      sans: ["Bai Jamjuree", "sans-serif"],
    },
    colors: {
      transparent: "#00000000",
      white: "#E5E5E5",
      gray: {
        900: "#161513",
        800: "#332F29",
        700: "#575249",
        600: "#969186",
        500: "#BDB8AD",
        400: "#DAD6CE",
        300: "#E6E3DE",
        200: "#EFEDE9",
        100: "#F2F1EF",
      },
      red: {
        900: "#991D0A",
        600: "#E94D35",
        300: "#F9AB9F",
        100: "#FDDDD9",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
