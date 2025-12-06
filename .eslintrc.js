/**
 * ESLint配置文件
 * @author: ZhangHF adays@foxmail.com
 * @description: 配置ESLint以支持TypeScript和Vue文件
 * @since: 1.0.0
 */

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', '@vue/eslint-config-typescript/recommended', 'plugin:vue/vue3-recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		// 自定义规则
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/no-v-html': 'off',
	},
};
