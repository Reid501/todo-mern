/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d81e5b",
        secondary: "#8a4efc",
        light: "#eee",
        lightAlt: "#61759b",
        dark: "#131a26",
        darkAlt: "#202b3e",
      },
    },
  },
  plugins: [],
};
