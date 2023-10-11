import { FC } from "react";
import { useHydrate } from "@/hooks/useHydrate";
import { useCartStore } from "@/store/cart.store";
import { useFastCartStore } from "@/store/fast-cart.store";
import FastCartIcon from "./fast-cart-icon/FastCartIcon";
import FastCartModal from "./fast-cart-modal/FastCartModal";

const FastCart: FC = () => {
	const { cartData } = useCartStore((state) => state);
	const { isOpenModal, onOpenModal, onCloseModal } = useFastCartStore(
		(state) => state,
	);

	const { hydrated } = useHydrate();

	return (
		<>
			{hydrated && !isOpenModal && (
				<FastCartIcon cart={cartData} onOpen={onOpenModal} />
			)}
			<FastCartModal
				cart={cartData}
				isOpen={isOpenModal}
				onClose={onCloseModal}
			/>
		</>
	);
};

export default FastCart;
