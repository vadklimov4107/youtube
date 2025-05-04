import type { Config } from 'tailwindcss'
import { COLORS } from './src/constants/colors.constants'

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: COLORS
		}
	},
	plugins: []
}
export default config
