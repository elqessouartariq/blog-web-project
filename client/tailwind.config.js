/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			heading: ['Libre Baskerville', 'serif'],
			primary: ['Open Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				primaryBlack: '#000000',
				primaryGray: 'rgba(28,28,28,0.5)',
				primaryWhite: '#FFFFFF',
				secondaryBlack: '#1C1C1C',
			},
		},
		dropShadow: {
			sm: '0px 0px 5px rgba(228, 228, 228, 0.25)',
		},
	},
	plugins: [],
};
