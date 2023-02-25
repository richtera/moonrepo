module.exports = {
	extends: ['plugin:vue/vue3-recommended', 'moon/browser', 'moon/vue'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		extraFileExtensions: ['.vue'],
		parser: '@typescript-eslint/parser',
		project: 'tsconfig.app.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		'node/no-unpublished-import': 'off',

		// Imported Vue files resolve as any
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
	},
};
