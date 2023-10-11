import { useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";

export const useLargerThan = (query: string, callback: () => void) => {
	const [isLargerThan] = useMediaQuery(query);

	useEffect(() => {
		if (isLargerThan) callback();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLargerThan]);
};
