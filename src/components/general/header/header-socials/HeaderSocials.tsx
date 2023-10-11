import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./HeaderSocials.module.scss";
import { socials } from "@/data/socials";

const HeaderSocials: FC = () => {
	return (
		<ul className={styles.root}>
			{socials.map((item) => (
				<li key={item.url}>
					<Link href={item.url}>
						<Image src={item.image} width={20} height={20} alt={item.title} />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default HeaderSocials;
