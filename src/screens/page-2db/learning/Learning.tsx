import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Learning.module.scss";

type Props = {
	learning: NonNullable<
		NonNullable<Page2DBQuery["page"]>["page2db"]
	>["learning"];
};

const Learning: FC<Props> = ({ learning }) => {
	return (
		<section className={styles.root}>
			<Container>
				<Title className={styles.title}>{learning?.title}</Title>
				<ul className={styles.list}>
					{learning?.list?.map((item, index) => (
						<li key={index}>
							<div
								className={classNames(
									styles.item,
									index == 3 && styles.withImage,
								)}
							>
								<div className={styles.itemNumber}>{index + 1}</div>
								<div className={styles.itemTitle}>{item?.title}</div>
								<div className={styles.itemDescription}>
									<p>{item?.description}</p>
								</div>
								{item?.image && (
									<Image
										className={styles.image}
										src={item.image.sourceUrl || ""}
										alt=""
										width={190}
										height={256}
									/>
								)}
							</div>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
};

export default Learning;
