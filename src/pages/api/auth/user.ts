import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { withSessionApiRoute } from "@/hooks/auth/withSessionApiRoute";
import { isTokenExpired } from "@/utils/auth/isTokenExpired";
import { refreshAuthToken } from "@/utils/auth/refreshAuthToken";
import { UserSession } from "@/utils/auth/session";

const userHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	const user: UserSession = req.session?.user || ({} as UserSession);

	if (!user?.refreshToken) {
		req.session.user = { ...user, isLoggedIn: false };

		await req.session.save();

		return res.json({
			error: "User is not logged in.",
			user,
			isLoggedIn: user?.isLoggedIn,
		});
	}

	if (!user?.authToken || isTokenExpired(user.authToken)) {
		try {
			const authToken = await refreshAuthToken(user.refreshToken);

			if (!authToken) {
				req.session.destroy();

				return res.json({
					error: "User is not logged in.",
					user: undefined,
					isLoggedIn: false,
				});
			}

			user.authToken = authToken;
			user.isLoggedIn = true;

			req.session.user = user;

			await req.session.save();

			return res.status(200).json({
				user,
				isLoggedIn: user.isLoggedIn,
			});
		} catch (error) {
			user.isLoggedIn = false;

			req.session.user = user;

			await req.session.save();

			return res.json({
				error: "User is not logged in.",
				user,
				isLoggedIn: user.isLoggedIn,
			});
		}
	}

	return res.status(200).json({ user });
};

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	return userHandler(req, res);
};

export default withSessionApiRoute(handler);
