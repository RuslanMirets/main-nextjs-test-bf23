import { GraphQLErrors } from "@apollo/client/errors";
import { useState } from "react";
import { UserSession } from "@/utils/auth/session";

export const usePasswordLogin = () => {
	const [loginErrors, setLoginErrors] = useState<GraphQLErrors>();
	const [isLoading, setIsLoading] = useState(false);

	const [userData, setUserData] = useState<UserSession | undefined>(undefined);

	async function login(
		username: string,
		password: string,
		redirectTo?: string,
	) {
		setIsLoading(true);

		const res = await fetch("/api/auth/login/password", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password }),
		});

		if (!res.ok) {
			const { errors } = await res.json();
			setLoginErrors(errors);
			setIsLoading(false);
			return;
		}

		const { user } = await res.json();

		setUserData(user);
		setIsLoading(false);

		if (redirectTo) {
			window.location.assign(redirectTo);
		}
	}

	return {
		login,
		errors: loginErrors,
		isLoading,
		isAuthenticated: !!userData,
		userData,
	};
};
