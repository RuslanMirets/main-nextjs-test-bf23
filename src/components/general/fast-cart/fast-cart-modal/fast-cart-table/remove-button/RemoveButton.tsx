import { Spinner } from "@chakra-ui/react";
import { FC } from "react";
import { MdDelete } from "react-icons/md";
import { useRemoveItemFromCart } from "@/hooks/cart/useRemoveItemFromCart";
import styles from "./RemoveButton.module.scss";

type Props = {
	cartKey: string;
};

const RemoveButton: FC<Props> = ({ cartKey }) => {
	const { handleRemoveItem, loading } = useRemoveItemFromCart();

	return (
		<button
			className={styles.root}
			type="button"
			onClick={() => handleRemoveItem(cartKey)}
		>
			{loading ? (
				<Spinner className={styles.spinner} size="xs" />
			) : (
				<MdDelete />
			)}
		</button>
	);
};

export default RemoveButton;
