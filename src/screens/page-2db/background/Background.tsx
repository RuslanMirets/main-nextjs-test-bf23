import Image from "next/image";
import { FC } from "react";
import Container from "../ui/container/Container";
import styles from "./Background.module.scss";

type Props = {
	title: string | null | undefined;
	image: string | null | undefined;
};

const Background: FC<Props> = ({ title, image }) => {
	return (
		<section className={styles.root}>
			<Container>
				<div className={styles.body}>
					<div className={styles.title}>{title}</div>
				</div>
			</Container>
			<Image
				className={styles.image}
				src={image || ""}
				alt=""
				width={1920}
				height={906}
			/>
		</section>
	);
};

export default Background;
