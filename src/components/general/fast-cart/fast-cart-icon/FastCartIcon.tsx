import { FC } from "react";
import { BsCart2 } from "react-icons/bs";
import { CartQuery } from "@/graphql/cart/__generated__/CartQuery";
import styles from "./FastCartIcon.module.scss";

type Props = {
	cart: CartQuery["cart"];
	onOpen: () => void;
};

const FastCartIcon: FC<Props> = ({ cart, onOpen }) => {
	if (cart?.isEmpty || !Object.keys(cart || {}).length) return null;

	return (
		<div className={styles.root} onClick={onOpen}>
			<BsCart2 size={30} />
			<span className={styles.quantity}>{cart?.contents?.itemCount}</span>
		</div>
	);
};

export default FastCartIcon;
