import copy from 'rollup-plugin-copy'
import sveltePreprocess from 'svelte-preprocess'

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/app.js',
		format: 'cjs'
	},
	plugins: [
		copy({
			targets: [
				{ src: 'src/app.html', dest: 'dist/public' },
				{ src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
				{ src: 'assets/images/**/*', dest: 'dist/public/images' }
			],
			preprocess: sveltePreprocess(),
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/bundle.css')
			},
		}),
		// svelte({
		// 	preprocess: sveltePreprocess(),
		// 	// enable run-time checks when not in production
		// 	dev: !production,
		// 	// we'll extract any component CSS out into
		// 	// a separate file — better for performance
		// 	css: css => {
		// 		css.write('public/bundle.css')
		// 	},
		// }),
	]
}