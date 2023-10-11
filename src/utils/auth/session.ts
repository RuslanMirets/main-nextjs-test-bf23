import type { IronSessionOptions } from "iron-session";
import { LoginMutation } from "@/graphql/auth/__generated__/LoginMutation";

export const sessionOptions: IronSessionOptions = {
	password: process.env.SECRET_COOKIE_PASSWORD as string,
	cookieName: "iron-session-ss",
	cookieOptions: {
		secure: process.env.NODE_ENV === "production" ? true : false,
	},
};

export type UserSession = LoginMutation["login"] & {
	isLoggedIn: boolean;
	userData:
		| {
				email: string;
				name: string;
		  }
		| undefined;
};

declare module "iron-session" {
	interface IronSessionData {
		user: UserSession;
	}
}
