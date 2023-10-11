import { GetStaticProps, NextPage } from "next";
import Blog from "@/screens/blog/Blog";
import { initializeApollo, addApolloState } from "@/lib/apollo-client";
import { PostsQueryDocument } from "@/graphql/post/__generated__/PostsQuery";

const BlogPage: NextPage = () => {
	return <Blog />;
};

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: PostsQueryDocument,
	});

	return addApolloState(apolloClient, { props: {} });
};

export default BlogPage;
