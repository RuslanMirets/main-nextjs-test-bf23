import { useRouter } from "next/router";
import queryString from "query-string";

export const useRemoveQueryParams = () => {
	const { push, query, pathname } = useRouter();

	const removeQueryParams = (keysToRemove: string[]) => {
		const newQuery = Object.keys(query).reduce(
			(acc: Record<string, string | string[] | undefined>, key) => {
				if (!keysToRemove.includes(key)) {
					acc[key] = query[key];
				}
				return acc;
			},
			{},
		);

		const newUrl = `${pathname}?${queryString.stringify(newQuery, {
			arrayFormat: "comma",
			encode: false,
		})}`;
		push(newUrl, undefined, { scroll: false });
	};

	return { removeQueryParams };
};
