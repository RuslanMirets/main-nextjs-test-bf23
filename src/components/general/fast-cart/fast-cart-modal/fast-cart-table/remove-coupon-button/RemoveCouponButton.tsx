import classNames from "classnames";
import { FC } from "react";
import { useRemoveCoupon } from "@/hooks/cart/useRemoveCoupon";
import styles from "./RemoveCouponButton.module.scss";

type Props = {
	couponCode: string | undefined;
};

const RemoveCouponButton: FC<Props> = ({ couponCode }) => {
	const { handleRemoveCoupon, loading } = useRemoveCoupon();

	return (
		<button
			className={classNames(styles.root, loading && styles.disabled)}
			type="button"
			onClick={() => handleRemoveCoupon(couponCode || "")}
		>
			[Убрать]
		</button>
	);
};

export default RemoveCouponButton;
