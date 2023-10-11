export const fetchUser = async (cookie: string | undefined) => {
	const response = await fetch(`${process.env.BASE_URL}/api/auth/user`, {
		headers: {
			Cookie: `iron-session-ss=${cookie}`,
		},
	});
	const data = await response.json();

	return data;
};
