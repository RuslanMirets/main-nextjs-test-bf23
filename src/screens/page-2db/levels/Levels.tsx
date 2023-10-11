import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Levels.module.scss";

type Props = {
	levels: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["levels"];
};

const Levels: FC<Props> = ({ levels }) => {
	return (
		<section className={styles.root}>
			<Container>
				<div className={styles.head}>
					<Title>{levels?.title}</Title>
					<div className={styles.level}>
						<div className={styles.levelTitle}>{levels?.level?.title}</div>
						<div className={styles.levelValue}>{levels?.level?.value}</div>
					</div>
				</div>
				<ul className={styles.list}>
					{levels?.list?.map((item, index) => (
						<li key={index}>
							<div className={styles.item}>
								<Image
									className={styles.itemImage}
									src={item?.image?.sourceUrl || ""}
									alt={item?.title || ""}
									width={190}
									height={190}
								/>
								<div>
									<div className={styles.itemTitle}>{item?.title}</div>
									<div className={styles.itemDescription}>
										{item?.description}
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
				<div className={styles.buttonWrapper}>
					<Link className={styles.button} href={levels?.button?.link || ""}>
						{levels?.button?.title}
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default Levels;
