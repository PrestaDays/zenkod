/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#F2E8CF",
				secondary: "#2A4747",
				tertiary: "#4A6670",
				accent: "#D57A66"
			}
		},
	},
	plugins: [
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
