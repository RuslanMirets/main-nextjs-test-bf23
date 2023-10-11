import { create } from "zustand";
import { initializeApollo } from "@/lib/apollo-client";
import {
	CartQuery,
	CartQueryDocument,
} from "@/graphql/cart/__generated__/CartQuery";

interface ICartStore {
	cartData: CartQuery["cart"];
	setCartData: (item: CartQuery["cart"]) => void;
	cartLoading: boolean;
}

export const useCartStore = create<ICartStore>()((set) => ({
	cartData: {},
	setCartData: (item) => set({ cartData: item }),
	cartLoading: true,
}));

const apolloClient = initializeApollo();
apolloClient.query({ query: CartQueryDocument }).then((result) => {
	useCartStore.setState({ cartData: result.data.cart, cartLoading: false });
});
