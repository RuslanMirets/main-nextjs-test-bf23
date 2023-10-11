import Image from "next/image";
import { FC, useState } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import styles from "./Buy.module.scss";
import BuyButton from "./buy-button/BuyButton";
import BuyInputs from "./buy-inputs/BuyInputs";

type Props = {
	buy: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["buy"];
};

const Buy: FC<Props> = ({ buy }) => {
	const [condition, setCondition] = useState(
		buy?.conditions?.[0]?.productId || "",
	);
	const [agreement, setAgreement] = useState(true);

	return (
		<section className={styles.root} id="buy">
			<Container>
				<div className={styles.body}>
					<div className={styles.info}>
						<h2 className={styles.title}>{buy?.title}</h2>
						<ul className={styles.mentorList}>
							{buy?.conditions?.map((item) => (
								<li key={item?.productId}>
									<div className={styles.mentorItem}>
										<div className={styles.mentorImage}>
											<Image
												src={item?.mentorImage?.sourceUrl || ""}
												alt={item?.mentorName || ""}
												width={124}
												height={124}
											/>
										</div>
										<div className={styles.mentorInfo}>
											<div className={styles.mentorCaption}>Ментор</div>
											<div className={styles.mentorName}>
												{item?.mentorName}
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
						<div className={styles.price}>
							<div>
								<div className={styles.priceCaption}>Стоимость курса</div>
								<div className={styles.priceValue}>{buy?.price}</div>
							</div>
							<div>
								<div className={styles.priceCaption}>Рассрочка</div>
								<div className={styles.priceValue}>{buy?.installment}</div>
							</div>
						</div>
					</div>
					<form>
						<div className={styles.formTitle}>Выберите условия:</div>
						<div className={styles.radioButtons}>
							{buy?.conditions?.map((item) => (
								<label className={styles.radioLabel} key={item?.productId}>
									<input
										className={styles.radioInput}
										type="radio"
										name="condition-radio"
										value={item?.productId || ""}
										onChange={(e) => setCondition(e.target.value)}
										checked={condition === item?.productId}
									/>
									<span className={styles.radioStyle}></span>
									<span
										dangerouslySetInnerHTML={{ __html: item?.condition || "" }}
									/>
								</label>
							))}
						</div>
						<BuyInputs />
						<div
							className={styles.privacy}
							dangerouslySetInnerHTML={{ __html: buy?.privacy || "" }}
						/>
						<label className={styles.checkboxLabel}>
							<input
								className={styles.checkboxInput}
								type="checkbox"
								onChange={(e) => setAgreement(e.target.checked)}
								checked={agreement}
							/>
							<span className={styles.checkboxStyle}></span>
							<span
								className={styles.checkboxText}
								dangerouslySetInnerHTML={{ __html: buy?.agreement || "" }}
							/>
						</label>
						<div className={styles.buttons}>
							{buy?.buttons?.map((button, index) => (
								<BuyButton
									key={index}
									agreement={agreement}
									condition={condition}
									button={button}
								/>
							))}
						</div>
					</form>
				</div>
			</Container>
		</section>
	);
};

export default Buy;
