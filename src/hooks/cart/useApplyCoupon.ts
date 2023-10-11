import { useToast } from "@chakra-ui/react";
import { useCartStore } from "@/store/cart.store";
import { useApplyCouponMutation } from "@/graphql/cart/__generated__/ApplyCouponMutation";

export const useApplyCoupon = () => {
	const toast = useToast();

	const { setCartData } = useCartStore((state) => state);

	const [applyCoupon, { loading }] = useApplyCouponMutation();

	const handleApplyCoupon = async (code: string) => {
		await applyCoupon({
			variables: { code },
			onCompleted: (data) => {
				setCartData(data.applyCoupon?.cart);
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

	return { handleApplyCoupon, loading };
};
