import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Post from "@/screens/post/Post";
import { initializeApollo, addApolloState } from "@/lib/apollo-client";
import { PostBySlugQueryDocument } from "@/graphql/post/__generated__/PostBySlugQuery";
import {
	PostsQuery,
	PostsQueryDocument,
} from "@/graphql/post/__generated__/PostsQuery";

const PostPage: NextPage = () => {
	return <Post />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.query<PostsQuery>({
		query: PostsQueryDocument,
	});

	const paths = data.posts?.nodes.map((post) => {
		return {
			params: {
				slug: post.slug || "",
			},
		};
	});

	return {
		paths: paths || [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const slug = ctx.params?.slug as string;

	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: PostBySlugQueryDocument,
		variables: { id: slug },
	});

	return addApolloState(apolloClient, { props: {} });
};

export default PostPage;
