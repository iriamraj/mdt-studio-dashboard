import { create } from "zustand";

interface AuthState {
	isPopupVisible: boolean;
	setIsPopupVisible: () => void;
}

const usePopupStore = create<AuthState>((set) => ({
	isPopupVisible: false,
	setIsPopupVisible: () => set((state) => ({ isPopupVisible: !state.isPopupVisible })),
}));

export default usePopupStore;
