/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#CB0005",
        pink: "#F0DCDB",
      },
    },
  },
  plugins: [],
};
