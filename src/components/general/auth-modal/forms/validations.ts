import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
	email: yup
		.string()
		.email("Некорректная почта")
		.required("Почта обязательная"),
	password: yup.string().required("Пароль обязательный"),
});
export type LoginFormData = yup.InferType<typeof LoginFormSchema>;

export const RegisterFormSchema = yup.object().shape({
	email: yup
		.string()
		.email("Некорректная почта")
		.required("Почта обязательная"),
	password: yup.string().required("Пароль обязательный"),
	username: yup.string().required("Ник обязательный"),
	firstName: yup.string().required("Имя обязательно"),
	lastName: yup.string().required("Фамилия обязательна"),
});
export type RegisterFormData = yup.InferType<typeof RegisterFormSchema>;
