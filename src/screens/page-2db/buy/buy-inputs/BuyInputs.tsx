import { FC } from "react";
import { useCartUserData } from "@/store/cart-user-data.store";
import styles from "./BuyInputs.module.scss";

const BuyInputs: FC = () => {
	const { userData, setUserData } = useCartUserData((state) => state);

	return (
		<div className={styles.root}>
			<div className={styles.group}>
				<label className={styles.label}>
					<span>Имя</span>
					<input
						type="text"
						value={userData.firstName}
						onChange={(e) =>
							setUserData({ ...userData, firstName: e.target.value })
						}
					/>
				</label>
				<label className={styles.label}>
					<span>Фамилия</span>
					<input
						type="text"
						value={userData.lastName}
						onChange={(e) =>
							setUserData({ ...userData, lastName: e.target.value })
						}
					/>
				</label>
			</div>
			<label className={styles.label}>
				<span>Почта</span>
				<input
					type="email"
					value={userData.email}
					onChange={(e) => setUserData({ ...userData, email: e.target.value })}
				/>
			</label>
			<label className={styles.label}>
				<span>Телефон</span>
				<input
					type="tel"
					value={userData.phone}
					onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
				/>
			</label>
		</div>
	);
};

export default BuyInputs;
