import { FC } from "react";
import FormField from "../../components/form-field/FormField";
import styles from "./FastCartForm.module.scss";

const FastCartForm: FC = () => {
	return (
		<div>
			<h3 className={styles.title}>Детали оплаты</h3>
			<div className={styles.inputs}>
				<div className={styles.inputGroup}>
					<FormField label="Имя" name="firstName" />
					<FormField label="Фамилия" name="lastName" />
				</div>
				<FormField label="Email" name="email" type="email" />
				<FormField label="Телефон" name="phone" type="tel" />
			</div>
		</div>
	);
};

export default FastCartForm;
