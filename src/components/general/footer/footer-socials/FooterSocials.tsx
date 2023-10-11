import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./FooterSocials.module.scss";
import { socials } from "@/data/socials";

const FooterSocials: FC = () => {
	return (
		<ul className={styles.root}>
			{socials.map((item) => (
				<li key={item.url}>
					<Link href={item.url}>
						<Image src={item.image2} width={30} height={30} alt={item.title} />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FooterSocials;
