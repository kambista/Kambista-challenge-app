/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kambista-blue": "#060F26",
        "white-background": "#FFF6F6F9",
        "white-component": "#FFFFFFFF",
        "gray-component": "#E0E0E0",
        "disabled-component": "#66666680",
        "kambista-green": "#00E3C2",
        "gray-input": "#686868",
        "gray-input-border": "#CCCCCC",
        "blue-info": "#E8F3FEBF",
      },
      fontFamily: {
        "montserrat-regular": ["Montserrat_400Regular", "sans-serif"],
        "montserrat-bold": ["Montserrat_700Bold", "sans-serif"],
        "montserrat-semibold": ["Montserrat_600SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
