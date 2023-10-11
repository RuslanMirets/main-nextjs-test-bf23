import { useRouter } from "next/router";

export const useGetQueryParam = (key: string) => {
	const router = useRouter();

	return router.query[key] as string;
};
