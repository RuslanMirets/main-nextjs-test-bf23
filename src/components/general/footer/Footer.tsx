import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { bebas_neue } from "@/components/layouts/main-layout/MainLayout";
import Container from "@/components/ui/container/Container";
import styles from "./Footer.module.scss";
import FooterMenu from "./footer-menu/FooterMenu";
import FooterSocials from "./footer-socials/FooterSocials";
import { phone } from "@/data/phone";

const Footer: FC = () => {
	return (
		<footer className={classNames(styles.root, bebas_neue.variable)}>
			<Container>
				<div className={styles.body}>
					<FooterMenu />
					<div className={styles.contacts}>
						<div className={styles.contactsItem}>
							<Image
								src="/img/logo.png"
								width={200}
								height={38}
								alt="Логотип"
								quality={100}
							/>
						</div>
						<div className={styles.contactsItem}>
							<FooterSocials />
						</div>
						<div className={styles.contactsItem}>
							<Link className={styles.phone} href={`tel:${phone.url}`}>
								{phone.title}
							</Link>
						</div>
						<div className={styles.contactsItem}>
							<div className={styles.address}>
								ИП Смирнова Светлана Лазаревна, <br /> г.Москва <br /> ИНН
								771386905164
							</div>
						</div>
					</div>
					<div className={styles.foot}>
						<p>© 2023 Школа рисунка и цифровой графики «Smirnov School»</p>
						<p>
							This site is protected by reCAPTCHA and the Google
							<a href="https://policies.google.com/terms"> Privacy Policy </a>
							and
							<a href="https://policies.google.com/privacy">
								{" "}
								Terms of Service{" "}
							</a>
							apply.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
