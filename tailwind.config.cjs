/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        nunito: ['"Nunito"', "sans-serif"],
      },
      backgroundImage: {
        hero: "url('src/assets/hero-img.png')",
      },
    },
  },
  plugins: [],
};
