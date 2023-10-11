import { NextRequest, NextResponse } from "next/server";
import { fetchUser } from "./utils/auth/fetchUser";

export async function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname;

	const protectedPaths = ["/profile"];

	const isPathProtected = protectedPaths?.some((path) => pathname == path);

	if (isPathProtected || pathname.match(/\/events\/.{1,}/)) {
		const cookieValue = req.cookies.get("iron-session-ss")?.value;

		const data = await fetchUser(cookieValue);

		if (data.error) {
			const url = new URL(`/`, req.url);
			return NextResponse.redirect(url);
		}
	}

	if (pathname == "/checkout") {
		const cookieValue = req.cookies.get("woo-session-ss");

		if (!cookieValue) {
			const url = new URL(`/cart`, req.url);
			return NextResponse.redirect(url);
		}
	}

	return NextResponse.next();
}
