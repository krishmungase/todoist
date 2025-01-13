/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				rich: {
					50: "#E7EEF1",  // Very light
					100: "#C3D6DD", // Light
					200: "#9FBEC9", // Lighter
					300: "#7BA6B5", // Soft
					400: "#578EA1", // Neutral
					500: "#2F667F", // Base color
					600: "#285765", // Slightly darker
					700: "#20474D", // Dark
					800: "#183635", // Darker
					900: "#10231E", // Very dark
				},
				primary: "#2F667F",
				secondary: "#539BBB",
				turnary: "#EEF5F8",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

