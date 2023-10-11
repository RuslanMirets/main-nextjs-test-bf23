import Image from "next/image";
import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Training.module.scss";

type Props = {
	training: NonNullable<
		NonNullable<Page2DBQuery["page"]>["page2db"]
	>["training"];
};

const Training: FC<Props> = ({ training }) => {
	return (
		<section className={styles.root}>
			<Container>
				<Title className={styles.title}>{training?.title}</Title>
				<ul className={styles.list}>
					{training?.list?.map((item, index) => (
						<li className={styles.item} key={index}>
							<div className={styles.imageBox}>
								<Image
									className={styles.cover}
									src={item?.image?.sourceUrl || ""}
									alt=""
									width={380}
									height={253}
								/>
							</div>
							<div className={styles.content}>
								<p className={styles.subtitle}>{item?.title}</p>
								<p className={styles.description}>{item?.description}</p>
							</div>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
};

export default Training;
