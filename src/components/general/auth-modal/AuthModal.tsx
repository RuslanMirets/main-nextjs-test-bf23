import {
	AbsoluteCenter,
	Box,
	Button,
	Divider,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import styles from "./AuthModal.module.scss";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import LoginClients from "./login-clients/LoginClients";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const AuthModal: FC<Props> = ({ isOpen, onClose }) => {
	const [formType, setFormType] = useState<"login" | "register">("login");

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size="lg">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{formType == "login" && "Авторизация"}
						{formType == "register" && "Регистрация"}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{formType == "login" && <LoginForm />}
						{formType == "register" && (
							<RegisterForm setFormType={setFormType} />
						)}
						<Box position="relative" padding="10">
							<Divider />
							<AbsoluteCenter bg="white" px="4">
								Или
							</AbsoluteCenter>
						</Box>
						<LoginClients />
					</ModalBody>
					<ModalFooter className={styles.footer}>
						{formType == "login" && (
							<div className={styles.footerBody}>
								Нет аккаунта?
								<Button variant="link" onClick={() => setFormType("register")}>
									Зарегистрируйтесь
								</Button>
							</div>
						)}
						{formType == "register" && (
							<div className={styles.footerBody}>
								Есть аккаунта?
								<Button variant="link" onClick={() => setFormType("login")}>
									Войдите
								</Button>
							</div>
						)}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AuthModal;
