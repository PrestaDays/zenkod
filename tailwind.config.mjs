/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				'vesper-black': ['vesper-black'],
				'vesper-bold': ['vesper-bold'],
				'vesper-medium': ['vesper-medium'],
				'vesper-regular': ['vesper-regular'],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addComponents, theme }) {
			addComponents({
				'.btn': {
					padding: theme('spacing.4'),
					margin: 'auto',
				},
			});
		},
	],
}
