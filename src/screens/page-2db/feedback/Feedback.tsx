import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import styles from "./Feedback.module.scss";
import { FeedbackDB2FormData, FeedbackDB2FormSchema } from "./validation";

type Props = {
	feedback: NonNullable<
		NonNullable<Page2DBQuery["page"]>["page2db"]
	>["feedback"];
};

const Feedback: FC<Props> = ({ feedback }) => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isSubmitted, errors, isSubmitSuccessful },
	} = useForm<FeedbackDB2FormData>({
		resolver: yupResolver(FeedbackDB2FormSchema),
	});

	const emails = feedback?.emails;

	const onSubmit: SubmitHandler<FeedbackDB2FormData> = async (dto) => {
		const { name, phone, telegram } = dto;

		await fetch("/api/mail", {
			method: "POST",
			body: JSON.stringify({
				name,
				phone,
				telegram,
				emails,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	return (
		<section className={styles.root}>
			<Container>
				<div className={styles.body}>
					<div className={styles.content}>
						<h2 className={styles.title}>{feedback?.title}</h2>
						<div
							className={styles.text}
							dangerouslySetInnerHTML={{ __html: feedback?.text || "" }}
						/>
						{isSubmitted && isSubmitSuccessful ? (
							<div className={styles.messageSuccess}>Заявка отправлена!</div>
						) : (
							<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
								<div className={styles.inputGroup}>
									<input
										className={styles.input}
										type="text"
										placeholder="имя"
										{...register("name")}
									/>
									<span className={styles.inputError}>
										{errors.name?.message}
									</span>
								</div>
								<div className={styles.inputGroup}>
									<input
										className={styles.input}
										type="tel"
										placeholder="телефон"
										{...register("phone")}
									/>
									<span className={styles.inputError}>
										{errors.phone?.message}
									</span>
								</div>
								<div className={styles.inputGroup}>
									<input
										className={styles.input}
										type="text"
										placeholder="tg: @"
										{...register("telegram")}
									/>
									<span className={styles.inputError}>
										{errors.telegram?.message}
									</span>
								</div>
								<button
									className={classNames(
										styles.button,
										isSubmitting && styles.disabled,
									)}
								>
									{feedback?.button?.title}
								</button>
							</form>
						)}
					</div>
					<Image
						className={styles.image}
						src={feedback?.image?.sourceUrl || ""}
						alt=""
						width={656}
						height={544}
					/>
				</div>
			</Container>
		</section>
	);
};

export default Feedback;
