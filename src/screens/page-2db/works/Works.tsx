import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Fancybox from "@/components/ui/fancybox/Fancybox";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Navigation from "../components/navigation/Navigation";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Works.module.scss";

type Props = {
	works:
		| NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["worksStudents"]
		| NonNullable<
				NonNullable<Page2DBQuery["page"]>["page2db"]
		  >["worksTeachers"];
};

const Works: FC<Props> = ({ works }) => {
	return (
		<section className={styles.root}>
			<Container>
				<Title className={styles.title}>{works?.title}</Title>
			</Container>
			<div className={styles.content}>
				<Fancybox
					options={{
						Carousel: {
							infinite: true,
						},
					}}
				>
					<Swiper
						className={styles.swiper}
						spaceBetween={10}
						slidesPerView="auto"
						centeredSlides
						loop
						breakpoints={{
							741: {
								spaceBetween: 46,
							},
							859: {
								spaceBetween: 60,
							},
						}}
					>
						{works?.list?.map((item, index) => (
							<SwiperSlide key={index}>
								<div className={styles.item}>
									<Link
										data-fancybox="gallery"
										href={item?.image?.sourceUrl || ""}
									>
										<Image
											className={styles.itemImage}
											src={item?.image?.sourceUrl || ""}
											alt=""
											width={734}
											height={420}
										/>
									</Link>
									<div className={styles.itemName}>{item?.name}</div>
								</div>
							</SwiperSlide>
						))}
						<Navigation />
					</Swiper>
				</Fancybox>
			</div>
		</section>
	);
};

export default Works;
