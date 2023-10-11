/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject,
	from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import merge from "deepmerge";
import Cookies from "js-cookie";
import isEqual from "lodash/isEqual";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { useMemo } from "react";
import { fetchUser } from "@/utils/auth/fetchUser";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const customFetch = (uri: string, options: any) => {
	const { operationName } = JSON.parse(options.body);
	return fetch(`${uri}?opname=${operationName}`, options);
};

function createApolloClient(ctx?: GetServerSidePropsContext) {
	const httpLink = new HttpLink({
		uri: process.env.APP_GRAPHQL_URL,
		credentials: "include",
		// uri: `http://localhost/e-commerce/graphql`,
		fetch: customFetch,
	});

	const errorLink = onError(({ graphQLErrors, networkError }) => {
		if (graphQLErrors)
			graphQLErrors.forEach(({ message, locations, path }) =>
				console.error(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
				),
			);
		if (networkError) console.error(`[Network error]: ${networkError}`);
	});

	const authLink = setContext(async (_, { headers }) => {
		const cookies = nookies.get(ctx);

		const data = await fetchUser(cookies["iron-session-ss"]);
		const authToken = data.user.authToken;

		return {
			headers: {
				...headers,
				authorization: authToken ? `Bearer ${authToken}` : "",
			},
		};
	});

	const middleware = new ApolloLink((operation, forward) => {
		const session = Cookies.get("woo-session-ss");
		if (session) {
			operation.setContext(({ headers = {} }) => ({
				headers: {
					"woocommerce-session": `Session ${session}`,
				},
			}));
		}

		const cookies = nookies.get(ctx);
		const token = cookies["woo-session-ss"];
		if (token) {
			operation.setContext(({ headers = {} }) => ({
				headers: {
					"woocommerce-session": `Session ${token}`,
				},
			}));
		}

		return forward(operation);
	});

	const afterware = new ApolloLink((operation, forward) => {
		return forward(operation).map((response) => {
			const context = operation.getContext();
			const {
				response: { headers },
			} = context;

			const session = headers.get("woocommerce-session");

			if (session) {
				if (session === "false") {
					Cookies.remove("woo-session-ss");
				} else if (Cookies.get("woo-session-ss") !== session) {
					Cookies.set("woo-session-ss", headers.get("woocommerce-session"));
				}
			}

			return response;
		});
	});

	const cache = new InMemoryCache();

	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: ctx
			? from([errorLink, middleware, authLink, afterware, httpLink])
			: from([errorLink, middleware, afterware, httpLink]),
		cache: cache,
		connectToDevTools: process.env.NODE_ENV !== "production",
	});
}

export function initializeApollo(
	initialState = null,
	ctx?: GetServerSidePropsContext,
) {
	const _apolloClient = apolloClient ?? createApolloClient(ctx);

	if (initialState) {
		const existingCache = _apolloClient.extract();

		const data = merge(existingCache, initialState, {
			arrayMerge: (destinationArray, sourceArray) => [
				...sourceArray,
				...destinationArray.filter((d) =>
					sourceArray.every((s) => !isEqual(d, s)),
				),
			],
		});

		_apolloClient.cache.restore(data);
	}
	if (typeof window === "undefined") return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export function addApolloState(
	client: ApolloClient<NormalizedCacheObject>,
	pageProps: any,
) {
	if (pageProps?.props) {
		pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
	}

	return pageProps;
}

export function useApollo(pageProps: any) {
	const state = pageProps[APOLLO_STATE_PROP_NAME];
	const store = useMemo(() => initializeApollo(state), [state]);
	return store;
}
