import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";
import { useApplyCoupon } from "@/hooks/cart/useApplyCoupon";
import styles from "./FastCartCoupon.module.scss";

const FastCartCoupon: FC = () => {
	const [value, setValue] = useState("");

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const { handleApplyCoupon, loading } = useApplyCoupon();

	const onClick = () => {
		handleApplyCoupon(value);
		setValue("");
	};

	return (
		<div className={styles.root}>
			<div className={styles.text}>
				Если у вас есть код купона, укажите его ниже.
			</div>
			<div className={styles.group}>
				<Input value={value} onChange={onChange} placeholder="Код купона" />
				<Button className={styles.button} onClick={onClick} isLoading={loading}>
					Применить купон
				</Button>
			</div>
		</div>
	);
};

export default FastCartCoupon;
