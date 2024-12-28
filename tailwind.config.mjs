/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			midnight: "#121725",
			primary: "#54E6AF",
			white: "#fff",
			gray: {
				500: "#2C344B",
				400: "#5A668A",
				300: "#C2CBE5",
			}
		},
		extend: {
			backgroundImage: {
				'mobile-image': "url('/src/assets/mobile/image-host.jpg')",
				'tablet-image': "url('/src/assets/tablet/image-host.jpg')",
				'desktop-image': "url('/src/assets/desktop/image-host.jpg')",
			},
		},
	},
	plugins: [],
}
