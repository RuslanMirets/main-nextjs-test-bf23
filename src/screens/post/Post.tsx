import { useRouter } from "next/router";
import { FC } from "react";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import Container from "@/components/ui/container/Container";
import Heading from "@/components/ui/heading/Heading";
import { usePostBySlugQuery } from "@/graphql/post/__generated__/PostBySlugQuery";
import styles from "./Post.module.scss";

const Post: FC = () => {
	const { query } = useRouter();

	const { data } = usePostBySlugQuery({
		variables: { id: query.slug as string },
	});

	return (
		<MainLayout title={data?.post?.title || ""}>
			<Container>
				<article>
					<Heading>{data?.post?.title}</Heading>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: data?.post?.content || "" }}
					/>
				</article>
			</Container>
		</MainLayout>
	);
};

export default Post;
