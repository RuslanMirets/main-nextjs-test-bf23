import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useCartUserData } from "@/store/cart-user-data.store";

type Props = {
	name: string;
	label: string;
	type?: "text" | "tel" | "email" | "password" | "number";
};

const FormField = ({ name, label, type = "text" }: Props) => {
	const { register, formState, setValue } = useFormContext();

	const { userData, setUserData } = useCartUserData((state) => state);

	setValue("firstName", userData.firstName);
	setValue("lastName", userData.lastName);
	setValue("email", userData.email);
	setValue("phone", userData.phone);

	return (
		<FormControl
			isInvalid={!userData[name] && !!formState.errors[name]?.message}
		>
			<FormLabel>{label}</FormLabel>
			<Input
				type={type}
				{...register(name)}
				value={userData[name]}
				onChange={(e) => setUserData({ ...userData, [name]: e.target.value })}
			/>
			<FormErrorMessage>
				{!userData[name] && formState.errors[name]?.message?.toString()}
			</FormErrorMessage>
		</FormControl>
	);
};

export default FormField;
