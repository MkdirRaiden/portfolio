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
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        stroke: {
          1: "#26242C",
        },
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       color: {
  //         primary: "#4479fd",
  //         secondary: "#a1bbff",
  //         tertiary: "#a2a4aa",
  //         bgLtDark: "#111111",
  //         bgDark: "#000000",
  //         heroBg: "rgba(31, 31, 31, .75)",
  //       },
  //       stroke: {
  //         1: "#26242C",
  //       },
  //     },

  //     fontFamily: {
  //       playfair: "var(--font-playfair)",
  //       poppins: "var(--font-poppins)",
  //       Gustavo: ["Gustavo-regular", "sans-serif"],
  //     },
  //   },
  // },
  plugins: [],
};
