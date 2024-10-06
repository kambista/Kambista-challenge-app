// tailwind.config.js

module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					700: "#00E3C2",
				},
				secondary: {
					700: "#2D313D",
				},
				third: {
					700: "#082774",
				},
				gray: {
					300: "#CCCCCC",
					600: "#686868",
				},
				text: {
					700: "#060F26",
				},
				red: {
					700: "#DC182D",
				},
			},
			fontFamily: {
				monserrat300: "Montserrat_300Light",
				monserrat400: "Montserrat_400Regular",
				monserrat500: "Montserrat_500Medium",
				monserrat600: "Montserrat_600SemiBold",
				monserrat700: "Montserrat_700Bold",
				monserrat900: "Montserrat_900Black",
			},
		},
	},
	plugins: [],
};
