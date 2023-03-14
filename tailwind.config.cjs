const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			black: colors.black,
			background: 'rgb(var(--color-background) / 1)',
			txt: 'rgb(var(--color-text) / 1)',
			button: 'rgb(var(--color-button) / 1)'
		}
	},
	plugins: []
};
