/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundColor: { black_1: "#060F26", gray_1: "#E0E0E0" },
    },
  },
  plugins: [],
};
