module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        ripple: "ripple 1s linear",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(100)" },
        },
      },
    },
  },
  plugins: [],
};
