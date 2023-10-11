import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";
import { sessionOptions } from "@/utils/auth/session";

export const withSessionApiRoute = (handler: NextApiHandler) =>
	withIronSessionApiRoute(handler, sessionOptions);
