import { FC } from "react";
import { usePostsQuery } from "@/graphql/post/__generated__/PostsQuery";
import PostCard from "../post-card/PostCard";
import styles from "./PostList.module.scss";

const PostList: FC = () => {
	const { data } = usePostsQuery();

	return (
		<ul className={styles.root}>
			{data?.posts?.nodes.map((post) => (
				<li key={post.databaseId}>
					<PostCard post={post} />
				</li>
			))}
		</ul>
	);
};

export default PostList;
