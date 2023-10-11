const path = require("path");

module.exports = {
	extends: [
		"plugin:@next/next/recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		useJSXTextNode: true,
		project: [path.resolve(__dirname, "tsconfig.eslint.json")],
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"@typescript-eslint/no-explicit-any": "warn",
		"func-names": "error",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				vars: "all",
				args: "after-used",
				ignoreRestSiblings: true,
				caughtErrors: "none",
				argsIgnorePattern:
					"^(_|doc$|req$|res$|next$|props$|params$|opts$|e$|headers$)",
			},
		],
		"@typescript-eslint/no-var-requires": "off",
		"react/display-name": "off",
		"react/react-in-jsx-scope": "off",
		"react/no-children-prop": "off",
		"react/prop-types": "error",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/ban-ts-comment": "off",
	},
};
