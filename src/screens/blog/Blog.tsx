import { FC } from "react";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import Container from "@/components/ui/container/Container";
import Heading from "@/components/ui/heading/Heading";
import PostList from "./post-list/PostList";

const Blog: FC = () => {
	return (
		<MainLayout title="Блог">
			<Container>
				<Heading>Блог</Heading>
				<PostList />
			</Container>
		</MainLayout>
	);
};

export default Blog;
