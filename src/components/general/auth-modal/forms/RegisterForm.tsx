import { Button, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormField from "@/components/ui/form-field/FormField";
import { useRegisterUserMutation } from "@/graphql/auth/__generated__/RegisterUserMutation";
import styles from "./AuthForms.module.scss";
import { RegisterFormData, RegisterFormSchema } from "./validations";

type Props = {
	setFormType: React.Dispatch<React.SetStateAction<"login" | "register">>;
};

const RegisterForm: FC<Props> = ({ setFormType }) => {
	const [success, setSuccess] = useState(false);

	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(RegisterFormSchema),
	});

	const [registerUser] = useRegisterUserMutation();

	const toast = useToast();

	const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
		try {
			await registerUser({ variables: { input: data } });
			setSuccess(true);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast({
				title: "Ошибка",
				description: error.message,
				status: "error",
				duration: 4000,
				position: "bottom-left",
				isClosable: true,
			});
		}
	};

	useEffect(() => {
		methods.setFocus("email");
	}, [methods]);

	if (success) {
		return (
			<div>
				Регистрация прошла успешно!{" "}
				<Button variant="link" onClick={() => setFormType("login")}>
					Войдите
				</Button>
			</div>
		);
	}

	return (
		<FormProvider {...methods}>
			<form className={styles.root} onSubmit={methods.handleSubmit(onSubmit)}>
				<FormField name="email" label="Email" type="email" />
				<FormField name="password" label="Пароль" type="password" />
				<FormField name="username" label="Ник" />
				<FormField name="firstName" label="Имя" />
				<FormField name="lastName" label="Фамилия" />
				<Button
					colorScheme="blue"
					type="submit"
					isLoading={methods.formState.isSubmitting}
				>
					Зарегистрироваться
				</Button>
			</form>
		</FormProvider>
	);
};

export default RegisterForm;
