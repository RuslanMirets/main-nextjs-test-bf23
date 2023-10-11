require("dotenv/config");

module.exports = {
	projects: {
		app: {
			schema: [process.env.APP_GRAPHQL_URL],
			documents: ["src/graphql/**/*.graphql"],
			extensions: {
				endpoints: {
					default: {
						url: process.env.APP_GRAPHQL_URL,
					},
				},
			},
		},
	},
};
