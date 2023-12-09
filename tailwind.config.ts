import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { NetflixTheme } from './NetflixTheme';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			backgroundImage: {
				'netflix-shows': "url('/src/lib/assets/netflix-shows.jpg')",
			},
			backgroundOpacity: {
				'30': '0.3',
			},
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					NetflixTheme
				]
			},
		}),
	],
} satisfies Config;
