import classNames from "classnames";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { useLogout } from "@/hooks/auth/useLogout";
import useBodyLock from "@/hooks/useBodyLock";
import { useLargerThan } from "@/hooks/useLargerThan";
import { useAuthenticationContext } from "@/providers/AuthenticationProvider";
import AuthModal from "../auth-modal/AuthModal";
import styles from "./Header.module.scss";
import Burger from "./burger/Burger";
import HeaderSocials from "./header-socials/HeaderSocials";
import Menu from "./menu/Menu";
import { phone } from "@/data/phone";

const Header: FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useLargerThan("(min-width: 1200px)", () => setMenuOpen(false));

	useBodyLock(menuOpen);

	const { isAuthenticated, isOpenAuthModal, onCloseAuthModal } =
		useAuthenticationContext();
	const { logout } = useLogout();

	const handleLogout = () => {
		Cookies.remove("nextjs-ss-link");
		logout();
	};

	return (
		<>
			<header className={styles.root}>
				<div className={styles.container}>
					<div className={styles.body}>
						<div className={styles.left}>
							<Link href="/">
								<Image
									src="/img/logo.png"
									width={150}
									height={29}
									alt="Логотип"
									quality={100}
								/>
							</Link>
							<HeaderSocials />
						</div>
						<div
							className={classNames(styles.center, menuOpen && styles.active)}
						>
							<Menu />
							<div className={styles.right}>
								<div className={styles.phone}>
									<Link href={`tel:${phone.url}`}>{phone.title}</Link>
									{isAuthenticated ? (
										<button className={styles.phoneBtn} onClick={handleLogout}>
											Выйти
										</button>
									) : (
										<button className={styles.phoneBtn}>Заказать звонок</button>
									)}
								</div>
								<div className={styles.address}>
									г. Москва Пн - Вс с 10:00 до 19:00
								</div>
							</div>
						</div>
						<Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					</div>
				</div>
			</header>
			<AuthModal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} />
		</>
	);
};

export default Header;
