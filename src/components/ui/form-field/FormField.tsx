import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
	type?: "text" | "tel" | "email" | "password" | "number";
	label?: string;
	name: string;
};

const FormField: FC<Props> = ({ type = "text", label, name }) => {
	const { register, formState } = useFormContext();

	return (
		<FormControl isInvalid={!!formState.errors[name]?.message}>
			<FormLabel>{label}</FormLabel>
			<Input type={type} {...register(name)} />
			<FormErrorMessage>
				{formState.errors[name]?.message?.toString()}
			</FormErrorMessage>
		</FormControl>
	);
};

export default FormField;
