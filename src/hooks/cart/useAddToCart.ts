import { useToast } from "@chakra-ui/react";
import { useCartStore } from "@/store/cart.store";
import { useFastCartStore } from "@/store/fast-cart.store";
import { usePaymentStore } from "@/store/payment.store";
import { useAddToCartMutation } from "@/graphql/cart/__generated__/AddToCartMutation";

export const useAddToCart = () => {
	const toast = useToast();

	const [addToCart, { loading }] = useAddToCartMutation();

	const { cartData, setCartData } = useCartStore((state) => state);
	const openFastCart = useFastCartStore((state) => state.onOpenModal);
	const { setPaymentData } = usePaymentStore((state) => state);

	const cartItems = cartData?.contents?.edges.map((item) => item.node);

	const handleAddToCart = async (
		databaseId: number,
		paymentMethod?: "wc_cloudpayments_gateway" | "dolyamepayment",
	) => {
		const includeProducts = cartItems?.some(
			(item) => item.product?.node.databaseId === databaseId,
		);

		if (paymentMethod) {
			setPaymentData(paymentMethod);
		}

		if (includeProducts) {
			openFastCart();
		} else {
			await addToCart({
				variables: { productId: databaseId },
				onCompleted: (data) => {
					setCartData(data.addToCart?.cart);
					openFastCart();
				},
				onError: (error) => {
					toast({
						title: "Ошибка",
						description: error.message,
						status: "error",
						duration: 4000,
						position: "bottom-left",
						isClosable: true,
					});
				},
			});
		}
	};

	return { handleAddToCart, loading };
};
