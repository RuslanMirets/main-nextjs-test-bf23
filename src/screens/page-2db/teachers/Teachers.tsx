import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Teachers.module.scss";

type Props = {
	teachers: NonNullable<
		NonNullable<Page2DBQuery["page"]>["page2db"]
	>["teachers"];
};

const Teachers: FC<Props> = ({ teachers }) => {
	return (
		<section className={styles.root}>
			<Container>
				<Title className={styles.title}>{teachers?.title}</Title>
				<Swiper
					modules={[Navigation]}
					spaceBetween={20}
					slidesPerView="auto"
					navigation
				>
					{teachers?.list?.map((item, index) => (
						<SwiperSlide className={styles.slide} key={index}>
							<div className={styles.card}>
								<div className={styles.background}>
									<Image
										src={item?.background?.sourceUrl || ""}
										alt=""
										width={360}
										height={475}
									/>
								</div>
								<div className={styles.header}>
									<Image
										className={styles.image}
										src={item?.image?.sourceUrl || ""}
										alt=""
										width={74}
										height={74}
									/>
									<p className={styles.subtitle}>{item?.title}</p>
								</div>
								<div className={styles.footer}>
									<p className={styles.description}>{item?.description}</p>
									<Link
										className={styles.portfolio}
										href={item?.portfolio || ""}
									>
										Портфолио
									</Link>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</section>
	);
};

export default Teachers;
