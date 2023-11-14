/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      '2rem': '2rem'
    },
    extend: {
      colors: {
        red: "#CB0005",
        pink: "#F0DCDB",
      },
      height: {
        "50px": "50px",
        "169px": "169px",
        "260px": "260px",
      },
      spacing: {
        "60px": "60px",
        "335px": "335px",
      },
    },
  },
  plugins: [],
};
