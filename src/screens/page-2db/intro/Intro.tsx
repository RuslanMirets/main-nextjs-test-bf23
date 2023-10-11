import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import styles from "./Intro.module.scss";

type Props = {
	intro: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["intro"];
};

const Intro: FC<Props> = ({ intro }) => {
	return (
		<section className={styles.root}>
			<Image
				className={styles.image1}
				src={intro?.image?.sourceUrl || ""}
				alt=""
				width={1920}
				height={712}
				quality={100}
				loading="eager"
			/>
			<Container>
				<div className={styles.body}>
					<div className={styles.author}>{intro?.author}</div>
					<div className={styles.content}>
						<h1
							className={styles.title}
							dangerouslySetInnerHTML={{ __html: intro?.title || "" }}
						/>
						<div className={styles.text}>
							<p>{intro?.text}</p>
						</div>
						<div className={styles.buttons}>
							{intro?.buttons?.map((button, index) => (
								<Link
									className={classNames(
										styles.button,
										button?.type == "fill" && styles.buttonFill,
										button?.type == "outline" && styles.buttonOutline,
									)}
									key={index}
									href={button?.link || ""}
								>
									{button?.title}
								</Link>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Intro;
