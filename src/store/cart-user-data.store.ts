import { create } from "zustand";

interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	[key: string]: string;
}

interface ICartUserStore {
	userData: IUser;
	setUserData: (item: IUser) => void;
}

export const useCartUserData = create<ICartUserStore>()((set) => ({
	userData: {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	},
	setUserData: (item) => set({ userData: item }),
}));
