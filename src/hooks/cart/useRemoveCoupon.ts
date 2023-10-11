import { useToast } from "@chakra-ui/react";
import { useCartStore } from "@/store/cart.store";
import { useRemoveCouponsMutation } from "@/graphql/cart/__generated__/RemoveCouponsMutation";

export const useRemoveCoupon = () => {
	const toast = useToast();

	const { setCartData } = useCartStore((state) => state);

	const [removeCoupons, { loading }] = useRemoveCouponsMutation();

	const handleRemoveCoupon = async (codes: string) => {
		await removeCoupons({
			variables: { codes },
			onCompleted: (data) => {
				setCartData(data.removeCoupons?.cart);
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
	};

	return { handleRemoveCoupon, loading };
};
