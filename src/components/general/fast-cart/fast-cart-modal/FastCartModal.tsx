import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Button,
	useToast,
	Checkbox,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { manrope } from "@/components/layouts/main-layout/MainLayout";
import { CartQuery } from "@/graphql/cart/__generated__/CartQuery";
import { useCheckoutMutation } from "@/graphql/checkout/__generated__/CheckoutMutation";
import { useComplexCoursesQuery } from "@/graphql/product/__generated__/ComplexCoursesQuery";
import styles from "./FastCartModal.module.scss";
import FastCartCoupon from "./fast-cart-coupon/FastCartCoupon";
import FastCartExpansion from "./fast-cart-expansion/FastCartExpansion";
import FastCartForm from "./fast-cart-form/FastCartForm";
import FastCartPayments from "./fast-cart-payments/FastCartPayments";
import FastCartTable from "./fast-cart-table/FastCartTable";
import { CheckoutFormData, CheckoutFormSchema } from "./validation";

type Props = {
	cart: CartQuery["cart"];
	isOpen: boolean;
	onClose: () => void;
};

const FastCartModal: FC<Props> = ({ cart, isOpen, onClose }) => {
	const [checkedItems, setCheckedItems] = useState([true, true]);
	const allChecked = checkedItems.every(Boolean);

	const methods = useForm<CheckoutFormData>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			payment: "",
		},
		resolver: yupResolver(CheckoutFormSchema),
	});

	const toast = useToast();
	const { replace } = useRouter();

	const [checkout, { loading }] = useCheckoutMutation();

	const onSubmit: SubmitHandler<CheckoutFormData> = async (dto) => {
		await checkout({
			variables: {
				paymentMethod: dto.payment,
				firstName: dto.firstName,
				lastName: dto.lastName,
				email: dto.email,
				phone: dto.phone,
			},
			onCompleted: (data) => {
				replace(data.checkout?.redirect || "");
			},
			onError: (error) => {
				toast({
					title: error.name,
					description: error.message,
					status: "error",
					duration: 4000,
					position: "bottom-left",
					isClosable: true,
				});
			},
		});
	};

	const { data: complexCourses } = useComplexCoursesQuery();

	const isComplexCourse = cart?.contents?.edges.some((content) => {
		const databaseId = content.node.product?.node.databaseId;
		return complexCourses?.products?.edges.map(
			(product) => product.node.databaseId === databaseId,
		);
	});

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="4xl">
			<ModalOverlay />
			<ModalContent className={manrope.className}>
				<ModalHeader>Оформление заказа</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{cart?.isEmpty ? (
						<div>Корзина пуста</div>
					) : (
						<FormProvider {...methods}>
							<form
								className={styles.form}
								onSubmit={methods.handleSubmit(onSubmit)}
							>
								<div className={styles.box}>
									<FastCartForm />
								</div>
								<div className={styles.box}>
									<FastCartTable cart={cart} />
									{isComplexCourse && <FastCartExpansion cart={cart} />}
									<FastCartPayments methods={methods} />
									<FastCartCoupon />
								</div>
								<div className={styles.privacy}>
									<p>
										Ваши личные данные будут использоваться для обработки ваших
										заказов, упрощения вашей работы с сайтом и для других целей,
										описанных в нашей{" "}
										<Link href="https://smirnovschool.com/privacy-policy">
											политике конфиденциальности
										</Link>
										.
									</p>
								</div>
								<div className={styles.agreements}>
									<Checkbox
										className={styles.agreementCheckbox}
										isChecked={checkedItems[0]}
										onChange={(e) =>
											setCheckedItems([e.target.checked, checkedItems[1]])
										}
									>
										Я ознакомился с{" "}
										<Link href="https://smirnov.school/offer" target="_blank">
											офертой
										</Link>
										, условиями и правилами оплаты и возвратов платежей.
									</Checkbox>
									<Checkbox
										className={styles.agreementCheckbox}
										isChecked={checkedItems[1]}
										onChange={(e) =>
											setCheckedItems([checkedItems[0], e.target.checked])
										}
									>
										Я ознакомился с{" "}
										<Link
											href="https://smirnov.school/privacy-1"
											target="_blank"
										>
											политикой обработки персональных данных
										</Link>{" "}
										и даю свое{" "}
										<Link
											href="https://smirnov.school/agreement-2/"
											target="_blank"
										>
											согласие
										</Link>
										.
									</Checkbox>
								</div>
								<Button
									className={styles.submit}
									type="submit"
									isLoading={loading}
									isDisabled={!allChecked}
								>
									Подтвердить заказ
								</Button>
							</form>
						</FormProvider>
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default FastCartModal;
