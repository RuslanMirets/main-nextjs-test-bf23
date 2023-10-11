import classNames from "classnames";
import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Burger.module.scss";

type Props = {
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Burger: FC<Props> = ({ menuOpen, setMenuOpen }) => {
	const handleToggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<button
			className={classNames(styles.root, menuOpen && styles.active)}
			onClick={handleToggleMenu}
		>
			<div className={styles.body}>
				<span></span>
				<span></span>
			</div>
		</button>
	);
};

export default Burger;
