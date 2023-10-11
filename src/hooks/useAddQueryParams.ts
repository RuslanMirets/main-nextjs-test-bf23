import { useRouter } from "next/router";
import queryString from "query-string";

interface IParams {
	key: string;
	value: string;
}

export const useAddQueryParams = () => {
	const { push, query, pathname } = useRouter();

	const addQueryParams = (params: IParams[]) => {
		const newQuery = { ...query };

		params.forEach(({ key, value }) => {
			if (key === "search" || key === "date-start" || key === "date-end") {
				newQuery[key] = value;
			} else {
				if (newQuery[key]) {
					const currentValues = String(query[key]).split(",");
					if (currentValues.includes(String(value))) {
						const updatedValues = currentValues.filter((v) => v !== value);
						if (updatedValues.length > 0) {
							newQuery[key] = updatedValues;
						} else {
							delete newQuery[key];
						}
					} else {
						newQuery[key] = [...currentValues, String(value)];
					}
				} else {
					newQuery[key] = [value];
				}
			}
		});

		const newUrl = `${pathname}?${queryString.stringify(newQuery, {
			arrayFormat: "comma",
			encode: false,
		})}`;
		push(newUrl, undefined, { scroll: false });
	};

	return { addQueryParams };
};

// const newQuery = { ...query, [key]: value };
// const newUrl = `${pathname}?${queryString.stringify(newQuery, {
// 	arrayFormat: "comma",
// })}`;
// push(newUrl);
