/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontSize: {
				"22px": "22px",
				"64px": "64px",
				"105px": "105px",
			},
			lineHeight: {
				22: "22px",
				35: "35px",
				1: "1 !important",
			},
			height: {
				400: "400px",
			},
		},
		screens: {
			xs: "320px",
			sm: "375px",
			// => @media (min-width: 375px) { ... }
			md: "768px",
			// => @media (min-width: 768px) { ... }
			lg: "1024px",
			// => @media (min-width: 1024px) { ... }
			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
