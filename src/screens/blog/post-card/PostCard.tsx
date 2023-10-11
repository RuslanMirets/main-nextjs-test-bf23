import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PostBySlugQuery } from "@/graphql/post/__generated__/PostBySlugQuery";
import styles from "./PostCard.module.scss";

const PostCard: FC<PostBySlugQuery> = ({ post }) => {
	return (
		<Link className={styles.root} href={`/blog/${post?.slug}`}>
			<Image
				className={styles.image}
				src={post?.featuredImage?.node.sourceUrl || "/img/default.jpg"}
				width={344}
				height={300}
				alt={post?.title || ""}
			/>
			<div>{post?.title}</div>
		</Link>
	);
};

export default PostCard;
