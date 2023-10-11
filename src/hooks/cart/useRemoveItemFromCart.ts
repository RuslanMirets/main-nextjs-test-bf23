import { useCartStore } from "@/store/cart.store";
import { useRemoveItemFromCartMutation } from "@/graphql/cart/__generated__/RemoveItemFromCartMutation";

export const useRemoveItemFromCart = () => {
	const { setCartData } = useCartStore((state) => state);

	const [removeItem, { loading }] = useRemoveItemFromCartMutation();

	const handleRemoveItem = async (key: string) => {
		await removeItem({
			variables: { keys: key },
			onCompleted: (data) => {
				setCartData(data.removeItemsFromCart?.cart);
			},
		});
	};

	return { handleRemoveItem, loading };
};
