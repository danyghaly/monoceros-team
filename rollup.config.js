import copy from 'rollup-plugin-copy'

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
			]
		})
	]
}