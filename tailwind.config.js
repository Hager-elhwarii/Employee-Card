/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "red-dark": "#9f1f31",
        "red-lighter": "#cc2f45",
        "gray-dark": "#2a2a2b",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
