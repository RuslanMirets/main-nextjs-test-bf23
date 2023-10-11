import { useDisclosure } from "@chakra-ui/react";
import {
	createContext,
	useContext,
	PropsWithChildren,
	useState,
	useEffect,
} from "react";
import { useAuth } from "@/hooks/auth/useAuth";
import { UserSession } from "@/utils/auth/session";

export const AuthenticationContext = createContext<{
	isAuthenticated: boolean | undefined;
	isLoading: boolean;
	userData: UserSession["userData"];
	error: Error | undefined;
	isOpenAuthModal: boolean;
	onOpenAuthModal: () => void;
	onCloseAuthModal: () => void;
}>({
	isAuthenticated: false,
	isLoading: true,
	userData: undefined,
	error: undefined,
	isOpenAuthModal: false,
	onOpenAuthModal: () => {},
	onCloseAuthModal: () => {},
});

const shouldShowChildren = (
	isAuthenticated: boolean | undefined,
	isLoading: boolean,
	redirectOnError: boolean,
) => {
	if (isLoading) {
		return false;
	}

	if (redirectOnError && isAuthenticated === undefined) {
		return false;
	}

	return isAuthenticated === redirectOnError;
};

export const AuthenticationProvider = ({
	redirectTo,
	redirectOnError = true,
	children,
}: PropsWithChildren<{
	redirectTo?: string;
	redirectOnError?: boolean;
}>) => {
	const [showChildren, setShowChildren] = useState(!redirectTo);

	const { isAuthenticated, isLoading, error, userData } = useAuth({
		redirectTo,
		redirectOnError,
	});

	useEffect(() => {
		if (!redirectTo) {
			return;
		}

		const show = shouldShowChildren(
			isAuthenticated,
			isLoading,
			redirectOnError,
		);

		if (showChildren !== show) {
			setShowChildren(show);
		}
	}, [isAuthenticated, isLoading, redirectOnError, redirectTo, showChildren]);

	const {
		isOpen: isOpenAuthModal,
		onOpen: onOpenAuthModal,
		onClose: onCloseAuthModal,
	} = useDisclosure();

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated,
				isLoading,
				error,
				userData,
				isOpenAuthModal,
				onOpenAuthModal,
				onCloseAuthModal,
			}}
		>
			{showChildren ? children : <div>Loading...</div>}
		</AuthenticationContext.Provider>
	);
};

export const useAuthenticationContext = () => useContext(AuthenticationContext);
