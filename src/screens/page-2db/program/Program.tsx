import Image from "next/image";
import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Program.module.scss";

type Props = {
	program: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["program"];
};

const Program: FC<Props> = ({ program }) => {
	return (
		<section className={styles.root} id="program">
			<Container>
				<Title className={styles.title}>{program?.title}</Title>
			</Container>
			<ul className={styles.list}>
				{program?.list?.map((item, index) => (
					<li key={index}>
						<div className={styles.item}>
							<div className={styles.itemLeft}>
								<Image
									className={styles.itemImage}
									src={item?.image?.sourceUrl || ""}
									alt={item?.title || ""}
									width={140}
									height={140}
								/>
								<div className={styles.itemInfo}>
									<div className={styles.itemCaption}>{item?.caption}</div>
									<div className={styles.itemTitle}>{item?.title}</div>
								</div>
							</div>
							<div
								className={styles.itemDescription}
								dangerouslySetInnerHTML={{ __html: item?.description || "" }}
							/>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Program;
