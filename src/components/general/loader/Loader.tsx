import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		router.events.on("routeChangeStart", () => {
			setLoading(true);
		});

		router.events.on("routeChangeComplete", () => {
			setLoading(false);
		});
	}, [router]);

	return (
		<>
			{loading && (
				<Spinner
					className={styles.root}
					size="xl"
					speed="0.8s"
					thickness="3px"
					color="#7558bd"
				/>
			)}
		</>
	);
};

export default Loader;
