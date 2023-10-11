/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,
	distDir: process.env.BUILD_DIR || ".next",
	env: {
		BASE_URL: process.env.BASE_URL,
		APP_GRAPHQL_URL: process.env.APP_GRAPHQL_URL,
		REVALIDATION_TOKEN: process.env.REVALIDATION_TOKEN,
		SECRET_COOKIE_PASSWORD: process.env.SECRET_COOKIE_PASSWORD,
		MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
		MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
	},
	images: {
		domains: [
			"dev.smirnov.school",
			"lh3.googleusercontent.com",
			"localhost",
			"avatars.yandex.net",
			"event-dev.smirnov.school",
			"smirnov.school",
		],
	},

	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg"),
		);

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ },
				use: [
					{
						loader: "@svgr/webpack",
						options: {
							dimensions: false,
						},
					},
				],
			},
		);

		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};

module.exports = nextConfig;
