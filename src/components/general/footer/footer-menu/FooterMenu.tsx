import Link from "next/link";
import { FC } from "react";
import styles from "./FooterMenu.module.scss";
import { footerMenu } from "@/data/footerMenu";

const FooterMenu: FC = () => {
	return (
		<div className={styles.root}>
			{footerMenu.map((item) => (
				<div key={item.title}>
					<div className={styles.title}>{item.title}</div>
					<ul className={styles.menuList}>
						{item.menu.map((item) => (
							<li key={item.title}>
								<Link className={styles.menuLink} href={item.url}>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default FooterMenu;
