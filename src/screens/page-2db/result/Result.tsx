import Link from "next/link";
import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Result.module.scss";

type Props = {
	result: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["result"];
};

const Result: FC<Props> = ({ result }) => {
	return (
		<section className={styles.root}>
			<div className={styles.content}>
				<Container>
					<Title className={styles.title}>{result?.title}</Title>
					<ul className={styles.list}>
						{result?.list?.map((item, index) => (
							<li className={styles.item} key={index}>
								<p className={styles.subtitle}>{item?.title}</p>
								<p className={styles.description}>{item?.description}</p>
							</li>
						))}
					</ul>
				</Container>
			</div>
			<Container>
				<div className={styles.buttons}>
					<Link className={styles.button} href={result?.button?.link || ""}>
						{result?.button?.title}
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default Result;
