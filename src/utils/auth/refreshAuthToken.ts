import { initializeApollo } from "@/lib/apollo-client";
import { RefreshTokenMutationDocument } from "@/graphql/auth/__generated__/RefreshTokenMutation";

export const refreshAuthToken: (
	refreshToken: string,
) => Promise<string> = async (refreshToken: string) => {
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.mutate({
		mutation: RefreshTokenMutationDocument,
		variables: { refreshToken },
	});

	return data?.refreshToken?.authToken ?? "";
};
