/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        san: ["Montserrat", "san-serif"],
        serif: ["Roboto", "san-serif"],
      },
    },
  },
  plugins: [],
};
