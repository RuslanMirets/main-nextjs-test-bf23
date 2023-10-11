import { Button, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";
import { FC, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormField from "@/components/ui/form-field/FormField";
import { usePasswordLogin } from "@/hooks/auth/usePasswordLogin";
import styles from "./AuthForms.module.scss";
import { LoginFormData, LoginFormSchema } from "./validations";

const LoginForm: FC = () => {
	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(LoginFormSchema),
	});

	const { login } = usePasswordLogin();

	const toast = useToast();

	const href = Cookies.get("nextjs-ss-link");

	const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
		try {
			await login(data.email, data.password, href ? href : "/profile");
		} catch (error) {
			toast({
				title: "Ошибка",
				description: "Неверный email или пароль",
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

	return (
		<FormProvider {...methods}>
			<form className={styles.root} onSubmit={methods.handleSubmit(onSubmit)}>
				<FormField name="email" label="Email" type="email" />
				<FormField name="password" label="Пароль" type="password" />
				<Button
					colorScheme="blue"
					type="submit"
					isLoading={methods.formState.isSubmitting}
				>
					Войти
				</Button>
			</form>
		</FormProvider>
	);
};

export default LoginForm;
