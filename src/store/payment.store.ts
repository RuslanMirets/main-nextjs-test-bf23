import { create } from "zustand";

interface IPaymentStore {
	paymentData: string;
	setPaymentData: (item: string) => void;
}
export const usePaymentStore = create<IPaymentStore>()((set) => ({
	paymentData: "",
	setPaymentData: (item) => set({ paymentData: item }),
}));
