import { useEffect, useState } from "react";
import { useCartUserData } from "@/store/cart-user-data.store";
import { UserSession } from "@/utils/auth/session";

export const useAuth = ({
	redirectTo,
	redirectOnError = true,
}: {
	redirectTo?: string;
	redirectOnError?: boolean;
} = {}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [userData, setUserData] = useState<UserSession["userData"] | undefined>(
		undefined,
	);
	const [error, setError] = useState<Error | undefined>();
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>();

	useEffect(() => {
		(async () => {
			const res = await fetch("/api/auth/user", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();

			setIsLoading(false);
			setUserData(data?.user.userData);
			setIsAuthenticated(!!data?.user?.isLoggedIn);
			setError(data?.error);

			useCartUserData.setState({
				userData: {
					firstName: data?.user.userData?.firstName || "",
					lastName: data?.user.userData?.lastName || "",
					email: data?.user.userData?.email || "",
					phone: data?.user.userData?.billing?.phone || "",
				},
			});
		})();
	}, []);

	useEffect(() => {
		if (!!isLoading || !redirectTo || isAuthenticated === undefined) {
			return;
		}

		if (redirectOnError !== isAuthenticated) {
			setTimeout(() => {
				window.location.assign(redirectTo);
			}, 200);
		}
	}, [isLoading, isAuthenticated, redirectOnError, redirectTo]);

	return {
		isLoading,
		isAuthenticated,
		userData,
		error,
	};
};
