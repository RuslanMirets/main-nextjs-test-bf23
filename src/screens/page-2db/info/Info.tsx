import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import styles from "./Info.module.scss";

type Props = {
	info: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["info"];
};

const Info: FC<Props> = ({ info }) => {
	return (
		<section className={styles.root}>
			<Container>
				<ul className={styles.list}>
					{info?.list?.map((item, index) => (
						<li key={index}>
							<div className={styles.item}>
								<div className={styles.itemTitle}>{item?.title}</div>
								<span className={styles.divider}></span>
								<div className={styles.itemValue}>{item?.value}</div>
							</div>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
};

export default Info;
