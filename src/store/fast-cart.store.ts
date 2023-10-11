import { create } from "zustand";

interface IFastCartStore {
	isOpenModal: boolean;
	onOpenModal: () => void;
	onCloseModal: () => void;
}

export const useFastCartStore = create<IFastCartStore>()((set) => ({
	isOpenModal: false,
	onOpenModal: () => set(() => ({ isOpenModal: true })),
	onCloseModal: () => set(() => ({ isOpenModal: false })),
}));
