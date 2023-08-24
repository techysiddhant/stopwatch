/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				pacifico: ["Pacifico", "cursive"],
				caveat: ["Caveat", "cursive"],
			},
		},
	},
	plugins: [],
};