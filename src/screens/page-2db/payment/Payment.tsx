import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Payment.module.scss";

type Props = {
	payment: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["payment"];
};

const Payment: FC<Props> = ({ payment }) => {
	return (
		<section className={styles.root}>
			<Container>
				<div className={styles.blocks}>
					<div className={styles.block}>
						<div className={styles.left}>
							<Title className={styles.subtitle}>
								{payment?.corporate?.title}
							</Title>
							<div className={styles.description}>
								{payment?.corporate?.description}
							</div>
							<div
								className={classNames(styles.buttons, styles.buttonsDesktop)}
							>
								{payment?.corporate?.buttons?.map((item, index) => (
									<Link
										className={classNames(
											styles.button,
											item?.type == "solid" && styles.buttonSolid,
											item?.type == "outline" && styles.buttonOutline,
										)}
										href={item?.link || ""}
										key={index}
									>
										{item?.title}
									</Link>
								))}
							</div>
						</div>
						<div className={styles.right}>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: payment?.corporate?.benefit || "",
								}}
							/>
						</div>
						<div className={classNames(styles.buttons, styles.buttonsMobile)}>
							{payment?.corporate?.buttons?.map((item, index) => (
								<Link
									className={classNames(
										styles.button,
										item?.type == "solid" && styles.buttonSolid,
										item?.type == "outline" && styles.buttonOutline,
									)}
									href={item?.link || ""}
									key={index}
								>
									{item?.title}
								</Link>
							))}
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.left}>
							<Title className={styles.subtitle}>
								{payment?.installment?.title}
							</Title>
						</div>
						<div className={styles.right}>
							<div className={styles.description}>
								{payment?.installment?.description}
							</div>
							<Link
								className={classNames(styles.button, styles.buttonSilver)}
								href={payment?.installment?.button?.link || ""}
							>
								{payment?.installment?.button?.title}
							</Link>
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.left}>
							<Title className={styles.subtitle}>{payment?.tax?.title}</Title>
							<div className={styles.description}>
								{payment?.tax?.description}
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.background}></div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Payment;
