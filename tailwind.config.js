/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "#8a8a92",
        main: "#eb690a",
      },
    },
  },
  plugins: [],
};
