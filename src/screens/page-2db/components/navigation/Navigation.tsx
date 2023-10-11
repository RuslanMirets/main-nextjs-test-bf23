import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import ArrowNextIcon from "@/screens/page-2db/img/arrow-next.svg";
import ArrowPrevIcon from "@/screens/page-2db/img/arrow-prev.svg";
import styles from "./Navigation.module.scss";

type Props = {
	className?: string;
};

const Navigation: FC<Props> = ({ className }) => {
	const swiper = useSwiper();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [slideConfig, setSlideConfig] = useState({
		isBeginning: true,
		isEnd: false,
	});
	const [locked, setLocked] = useState(true);

	useEffect(() => {
		setLocked(swiper.isLocked);
	}, [swiper]);

	useEffect(() => {
		swiper.on("slideChange", (swipe) => {
			setSlideConfig({ isBeginning: swipe.isBeginning, isEnd: swipe.isEnd });
		});
	}, [swiper]);

	if (locked) return null;

	return (
		<div className={classNames(styles.root, className)}>
			<button className={styles.button} onClick={() => swiper.slidePrev()}>
				<ArrowPrevIcon className={styles.prevIcon} />
			</button>
			<button className={styles.button} onClick={() => swiper.slideNext()}>
				<ArrowNextIcon className={styles.nextIcon} />
			</button>
		</div>
	);
};

export default Navigation;
