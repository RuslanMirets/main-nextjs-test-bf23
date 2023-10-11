import * as yup from "yup";

export const FeedbackDB2FormSchema = yup.object().shape({
	name: yup.string().required("Обязательное поле"),
	phone: yup.string().required("Обязательное поле"),
	telegram: yup.string().required("Обязательное поле"),
});
export type FeedbackDB2FormData = yup.InferType<typeof FeedbackDB2FormSchema>;
