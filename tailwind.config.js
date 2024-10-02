/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: "#4479fd",
          secondary: "#a1bbff",
          tertiary: "#a2a4aa",
          bgLtDark: "#111111",
          bgDark: "#000000",
          heroBg: "rgba(31, 31, 31, .75)",
        },
        stroke: {
          1: "#26242C",
        },
      },

      fontFamily: {
        playfair: "var(--font-playfair)",
        poppins: "var(--font-poppins)",
        Gustavo: ["Gustavo-regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
