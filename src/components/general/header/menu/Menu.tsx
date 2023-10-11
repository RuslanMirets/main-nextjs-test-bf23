import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import { useLargerThan } from "@/hooks/useLargerThan";
import styles from "./Menu.module.scss";
import { menu } from "@/data/menu";

const Menu: FC = () => {
	const [submenuOpen, setSubmenuOpen] = useState(-1);
	const [megamenuOpen, setMegamenuOpen] = useState(-1);

	const handleToggleSubmenu = (index: number) => {
		if (submenuOpen === index) {
			setSubmenuOpen(-1);
		} else {
			setSubmenuOpen(index);
		}
	};
	const handleToggleMegamenu = (index: number) => {
		if (megamenuOpen === index) {
			setMegamenuOpen(-1);
		} else {
			setMegamenuOpen(index);
		}
	};

	const navRef = useClickOutside(() => {
		setSubmenuOpen(-1);
		setMegamenuOpen(-1);
	});

	useLargerThan("(min-width: 1200px)", () => {
		setSubmenuOpen(-1);
		setMegamenuOpen(-1);
	});

	return (
		<>
			<nav ref={navRef}>
				<ul className={styles.menuList}>
					{menu.map((menuItem, index) =>
						menuItem.url ? (
							<li className={styles.menuItem} key={menuItem.title}>
								<Link className={styles.menuLink} href={menuItem.url}>
									{menuItem.title}
								</Link>
							</li>
						) : (
							<li
								className={classNames(
									styles.menuItem,
									menuItem?.type == "megamenu" && styles.megamenuToggle,
								)}
								key={menuItem.title}
							>
								<div
									className={classNames(
										styles.menuLink,
										submenuOpen == index && styles.active,
										menuItem.type == "submenu" && styles.megamenuToggle,
									)}
									onClick={() => handleToggleSubmenu(index)}
								>
									{menuItem.title}
									<Image
										src="/img/header/arrow-down.svg"
										width={12}
										height={12}
										alt=""
									/>
								</div>
								{submenuOpen == index && (
									<ul
										className={classNames(
											styles.submenu,
											menuItem.type == "megamenu" && styles.megamenuFirst,
										)}
									>
										{menuItem.submenu?.map((submenuItem, index) =>
											submenuItem.urlS ? (
												<li
													className={styles.menuItem}
													key={submenuItem.titleS}
												>
													<Link
														className={styles.menuLink}
														href={submenuItem.urlS}
													>
														{submenuItem.titleS}
													</Link>
												</li>
											) : (
												<li key={submenuItem.titleS}>
													<div
														className={classNames(
															styles.menuLink,
															megamenuOpen == index && styles.active,
														)}
														onClick={() => handleToggleMegamenu(index)}
													>
														{submenuItem.titleS}
														{submenuItem.typeS == "megamenu" && (
															<Image
																src="/img/header/arrow-down.svg"
																width={12}
																height={12}
																alt=""
															/>
														)}
													</div>
													{megamenuOpen == index && submenuItem.megamenu && (
														<ul className={classNames(styles.megamenuSecond)}>
															{submenuItem.megamenu?.map((megamenuItem) => (
																<li key={megamenuItem.titleM}>
																	<Link
																		className={styles.menuLink}
																		href={megamenuItem.urlM || ""}
																	>
																		{megamenuItem.titleM}
																	</Link>
																</li>
															))}
														</ul>
													)}
												</li>
											),
										)}
									</ul>
								)}
							</li>
						),
					)}
				</ul>
			</nav>
		</>
	);
};

export default Menu;
