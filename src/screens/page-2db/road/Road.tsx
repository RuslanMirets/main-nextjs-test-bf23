import Image from "next/image";
import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Road.module.scss";

type Props = {
	road: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["road"];
};

const Road: FC<Props> = ({ road }) => {
	return (
		<section className={styles.root}>
			<Container>
				<Title className={styles.title}>{road?.title}</Title>
				<div className={styles.content}>
					<ul className={styles.list}>
						{road?.list?.map((item, index) => (
							<li className={styles.item} key={index}>
								<p className={styles.subtitle}>{item?.title}</p>
								<p className={styles.salary}>{item?.salary}</p>
								<p className={styles.years}>{item?.years}</p>
							</li>
						))}
					</ul>
					<div className={styles.box}>
						<p className={styles.description}>{road?.description}</p>
						<Image
							src={road?.image?.sourceUrl || ""}
							alt=""
							width={150}
							height={216}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Road;
