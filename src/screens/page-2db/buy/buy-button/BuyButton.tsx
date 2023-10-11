import classNames from "classnames";
import { FC } from "react";
import { useAddToCart } from "@/hooks/cart/useAddToCart";
import styles from "./BuyButton.module.scss";

type Props = {
	agreement: boolean;
	condition: string;
	button: {
		title?: string | null | undefined;
		type?: string | null | undefined;
	} | null;
};

const BuyButton: FC<Props> = ({ agreement, button, condition }) => {
	const { handleAddToCart, loading } = useAddToCart();

	const handleClick = () => {
		if (button?.type === "outline") {
			handleAddToCart(Number(condition), "dolyamepayment");
		} else {
			handleAddToCart(Number(condition), "wc_cloudpayments_gateway");
		}
	};

	return (
		<button
			className={classNames(
				styles.root,
				button?.type === "fill" && styles.fill,
				button?.type === "outline" && styles.outline,
				(!agreement || loading) && styles.disabled,
			)}
			type="button"
			onClick={handleClick}
		>
			{button?.title}
		</button>
	);
};

export default BuyButton;
