/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "2rem": "2rem",
      "1.5rem": "1.5rem",
    },
    extend: {
      colors: {
        red: "#CB0005",
        pink: "#F0DCDB",
        gray: "#292929",
      },
      height: {
        "50px": "50px",
        "169px": "169px",
        "260px": "260px",
        "370px": "370px",
        "400px": "400px",
        "600px": "600px",
      },
      width: {
        "213px": "213px",
        "251px": "251px",
        "260px": "260px",
        "300px": "300px",
        "400px": "400px",
      },
      spacing: {
        "60px": "60px",
        "30px": "30px",
      },
    },
  },
  plugins: [],
};
