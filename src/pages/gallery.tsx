import { GetStaticProps, NextPage } from "next";
import Gallery from "@/screens/gallery/Gallery";
import { addApolloState, initializeApollo } from "@/lib/apollo-client";
import { GalleryCategoriesDocument } from "@/graphql/gallery/__generated__/GalleryCategories";
import { GalleryQueryDocument } from "@/graphql/gallery/__generated__/GalleryQuery";

const GalleryPage: NextPage = () => {
	return <Gallery />;
};

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({ query: GalleryQueryDocument });
	await apolloClient.query({ query: GalleryCategoriesDocument });

	return addApolloState(apolloClient, { props: {} });
};

export default GalleryPage;
