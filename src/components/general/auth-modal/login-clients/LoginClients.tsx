import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { useLoginClientsQuery } from "@/graphql/auth/__generated__/LoginClientsQuery";
import styles from "./LoginClients.module.scss";

// import { loginClients } from "@/data/loginClients";

const LoginClients: FC = () => {
	const { data, loading } = useLoginClientsQuery();

	if (!data) return null;

	if (loading) return <div>Loading...</div>;

	return (
		<ul className={styles.root}>
			{data.loginClients?.map(
				(item) =>
					item?.authorizationUrl && (
						<li key={item?.authorizationUrl}>
							<Link href={item?.authorizationUrl || ""}>
								<Button variant="outline">
									Войти с помощью {item?.provider}
								</Button>
							</Link>
						</li>
					),
			)}
		</ul>
	);
};

export default LoginClients;
