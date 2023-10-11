interface ILoginClients {
	authorizationUrl: string;
	provider: string;
}

export const loginClients: ILoginClients[] = [
	{
		authorizationUrl:
			"https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fdev1.smirnov.school%2Fapi%2Fauth%2Flogin%2Fgoogle&prompt=consent&scope=openid%20email%20profile&state=684078b31bccf35be34e70a4bb6d3a03&response_type=code&client_id=686716838989-hh0af7pk48lrq8rhnr782ajnuvsbloh9.apps.googleusercontent.com",
		provider: "GOOGLE",
	},
];
