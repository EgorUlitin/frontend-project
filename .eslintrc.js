module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		'react/jsx-indent': [2, 4],
		'react/jsx-indent-props': [2, 4],
		indent: [2, 4],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/require-default-props': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'no-shadow': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
};
