import Image from "next/image";
import { FC } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Navigation from "../components/navigation/Navigation";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Reviews.module.scss";

type Props = {
	reviews: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["reviews"];
};

const Reviews: FC<Props> = ({ reviews }) => {
	return (
		<section className={styles.root}>
			<Container>
				<Title className={styles.title}>{reviews?.title}</Title>
			</Container>
			<Swiper
				className={styles.swiper}
				slidesPerView="auto"
				spaceBetween={10}
				breakpoints={{
					741: {
						spaceBetween: 30,
					},
				}}
			>
				{reviews?.list?.map((item, index) => (
					<SwiperSlide key={index}>
						<div className={styles.item}>
							<Image
								className={styles.itemImage}
								src={item?.image?.sourceUrl || ""}
								alt=""
								width={106}
								height={106}
							/>
							<div className={styles.itemInfo}>
								<div className={styles.itemName}>{item?.name}</div>
								<div
									className={styles.itemText}
									dangerouslySetInnerHTML={{ __html: item?.text || "" }}
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
				<Navigation className={styles.navigation} />
			</Swiper>
		</section>
	);
};

export default Reviews;
