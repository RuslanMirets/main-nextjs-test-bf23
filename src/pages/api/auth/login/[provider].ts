import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import nookies from "nookies";
import { withSessionApiRoute } from "@/hooks/auth/withSessionApiRoute";
import { initializeApollo } from "@/lib/apollo-client";
import { UserSession } from "@/utils/auth/session";
import { LoginMutationDocument } from "@/graphql/auth/__generated__/LoginMutation";
import {
	LoginInput,
	LoginProviderEnum,
	OAuthProviderResponseInput,
} from "@/__generated__/types";

const loginHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
	input: LoginInput,
) => {
	const apolloClient = initializeApollo();

	const { data, errors } = await apolloClient.mutate({
		mutation: LoginMutationDocument,
		variables: { input },
	});

	const user = {
		...data?.login,
		isLoggedIn: !errors,
	} as UserSession;

	req.session.user = user;
	await req.session.save();

	if (errors?.length) {
		return res.status(401).json({ user, errors });
	}

	const href = nookies.get({ req });

	if (input.provider === "PASSWORD") {
		res.status(errors?.length ? 401 : 200).json({
			user: { ...user, authToken: undefined, refreshToken: undefined },
			errors,
		});
	} else {
		res.redirect(href ? `/${href["nextjs-ss-link"]}` : "/profile");
	}
};

const getProviderInput = async (provider: string, req: NextApiRequest) => {
	const providerEnum = provider.toUpperCase() as LoginProviderEnum;

	switch (providerEnum) {
		case LoginProviderEnum.Password:
			return {
				provider: providerEnum,
				credentials: {
					username: req.body.username,
					password: req.body.password,
				},
			};
		default: {
			const input = {
				provider: providerEnum,
				oauthResponse: {
					code: req.query.code as string,
				} as OAuthProviderResponseInput,
			};

			if (req.query?.state) {
				input.oauthResponse.state = req.query.state as string;
			}

			return input;
		}
	}
};

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	const provider = (req.query?.provider as string) || "";
	const input = await getProviderInput(provider, req);

	return loginHandler(req, res, input);
};

export default withSessionApiRoute(handler);
