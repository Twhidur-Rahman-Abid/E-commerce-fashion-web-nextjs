/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#fc6f42",
        Secondary: "#daaf39",
        lightYellow: "#FFCF49",
        purple: "#9864D9",
        lightPurple: "#cca3ff",
        green: "#accb46",
        lightGreen: "#D5F178",
        pink: "#df7f82",
        dark: "#292321",
        textDark: "#4D4E51",
        lightPink: "#ffe0d3",
        bg: "#FFF9F2",
      },
    },
  },
  plugins: [],
};
