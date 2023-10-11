import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { usePaymentStore } from "@/store/payment.store";
import { usePaymentGatewaysQuery } from "@/graphql/checkout/__generated__/PaymentGatewaysQuery";
import styles from "./FastCartPayments.module.scss";

type Props = {
	methods: UseFormReturn<
		{
			firstName: string;
			lastName: string;
			email: string;
			phone: string;
			payment: string;
		},
		undefined
	>;
};

const FastCartPayments: FC<Props> = ({ methods }) => {
	const { data, loading } = usePaymentGatewaysQuery();
	const payments = data?.paymentGateways?.edges.map((item) => item.node);

	const { paymentData } = usePaymentStore((state) => state);

	if (loading) return <div>Loading..</div>;

	if (!payments) return null;

	return (
		<div className={styles.root}>
			<RadioGroup
				className={styles.radioGroup}
				defaultValue={paymentData ? paymentData : payments[0].id}
			>
				<Stack>
					{payments?.map((item) => (
						<Radio
							value={item.id}
							key={item.id}
							{...methods.register("payment")}
						>
							{item.title}
						</Radio>
					))}
				</Stack>
			</RadioGroup>
			<div className={styles.text}>
				для оплаты иностранной картой, напишите нашим менеджерам в соцсети
			</div>
		</div>
	);
};

export default FastCartPayments;
