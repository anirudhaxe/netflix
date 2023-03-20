import { create } from "zustand";  // zustand for global state management
// this file is for defining global state
export interface ModalStoreInterface {
    movieId? : string;
    isOpen : boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
    movieId: undefined, // default movieId -> Undefined
    isOpen: false, // default isOpen -> false
    openModal: (movieId: string) => set({ isOpen: true, movieId }), // movieId: movieId
    closeModal: () => set({ isOpen: false, movieId: undefined })
}))

export default useInfoModal;