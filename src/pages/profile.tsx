import { GetServerSideProps, NextPage } from "next";
import Profile from "@/screens/profile/Profile";
import { initializeApollo, addApolloState } from "@/lib/apollo-client";
import { ViewerQueryDocument } from "@/graphql/user/__generated__/ViewerQuery";

const ProfilePage: NextPage = () => {
	return <Profile />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const apolloClient = initializeApollo(null, ctx);

	await apolloClient.query({ query: ViewerQueryDocument });

	return addApolloState(apolloClient, { props: {} });
};

export default ProfilePage;
