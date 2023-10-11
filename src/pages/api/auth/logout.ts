import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { withSessionApiRoute } from "@/hooks/auth/withSessionApiRoute";

const logoutHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	req.session.destroy();

	return res.status(200).json({ isLoggedIn: false });
};

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	return logoutHandler(req, res);
};

export default withSessionApiRoute(handler);
