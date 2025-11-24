/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'-apple-system',
					'BlinkMacSystemFont',
					'San Francisco',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif'
				]
			},
			colors: {
				// Base colors - Deep Navy theme
				navy: {
					50: '#E6EBF5',
					100: '#CDD7EB',
					200: '#9BAFD7',
					300: '#6987C3',
					400: '#375FAF',
					500: '#1E3A5F',
					600: '#182E4D',
					700: '#12223A',
					800: '#0D1829',
					900: '#070C15',
					950: '#030509'
				},
				// Primary - Electric Cyan
				cyan: {
					50: '#E0F9FF',
					100: '#B8F1FF',
					200: '#7AE7FF',
					300: '#3DD9FF',
					400: '#00D9FF',
					500: '#00B8D9',
					600: '#0097B2',
					700: '#00768C',
					800: '#005566',
					900: '#003D4D'
				},
				// Secondary - Purple/Violet
				violet: {
					50: '#F5F3FF',
					100: '#EDE9FE',
					200: '#DDD6FE',
					300: '#C4B5FD',
					400: '#A78BFA',
					500: '#8B5CF6',
					600: '#7C3AED',
					700: '#6D28D9',
					800: '#5B21B6',
					900: '#4C1D95'
				},
				// Tertiary - Mint Green
				mint: {
					50: '#ECFDF5',
					100: '#D1FAE5',
					200: '#A7F3D0',
					300: '#6EE7B7',
					400: '#34D399',
					500: '#10B981',
					600: '#059669',
					700: '#047857',
					800: '#065F46',
					900: '#064E3B'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
