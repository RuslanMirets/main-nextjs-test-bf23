import { GetStaticProps, NextPage } from "next";
import Page2DB from "@/screens/page-2db/Page2DB";
import { addApolloState, initializeApollo } from "@/lib/apollo-client";
import { Page2DBQueryDocument } from "@/graphql/page/__generated__/Page2DBQuery";

const Page2DBPage: NextPage = () => {
	return <Page2DB />;
};

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({ query: Page2DBQueryDocument });

	return addApolloState(apolloClient, { props: {} });
};

export default Page2DBPage;
