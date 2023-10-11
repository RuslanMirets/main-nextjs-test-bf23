import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AuthenticationProvider } from "@/providers/AuthenticationProvider";
import { useApollo } from "@/lib/apollo-client";
import "@/assets/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={apolloClient}>
			<AuthenticationProvider>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</AuthenticationProvider>
		</ApolloProvider>
	);
}
