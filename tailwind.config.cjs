/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#e96269",
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
