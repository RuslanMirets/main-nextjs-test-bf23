import { Select } from "@chakra-ui/react";
import { ChangeEventHandler, FC } from "react";
import { useAddToCart } from "@/hooks/cart/useAddToCart";
import { CartQuery } from "@/graphql/cart/__generated__/CartQuery";
import { useExpansionSetsQuery } from "@/graphql/product/__generated__/ExpansionSetsQuery";
import styles from "./FastCartExpansion.module.scss";

type Props = {
	cart: CartQuery["cart"];
};

const FastCartExpansion: FC<Props> = ({ cart }) => {
	const { data, loading: dataLoading } = useExpansionSetsQuery();
	const products = data?.products?.edges.map((edge) => edge.node);

	const { handleAddToCart, loading: addToCartLoading } = useAddToCart();

	const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
		handleAddToCart(Number(e.target.value));
	};

	const isMatch = cart?.contents?.edges.some((edge) => {
		const databaseId = edge.node.product?.node.databaseId;
		return products?.some((product) => product.databaseId === databaseId);
	});

	if (!data || isMatch) return null;

	if (dataLoading) return <div>Loading...</div>;

	return (
		<div>
			<div className={styles.title}>Выберите экспеншен-сет</div>
			<Select
				onChange={onChange}
				isDisabled={addToCartLoading}
				defaultValue="DEFAULT"
			>
				<option value="DEFAULT" disabled>
					Выберите сет...
				</option>
				{products?.map((product) => (
					<option key={product.databaseId} value={product.databaseId}>
						{product.name}
					</option>
				))}
			</Select>
		</div>
	);
};

export default FastCartExpansion;
