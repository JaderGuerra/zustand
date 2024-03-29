import { create } from "zustand";

interface Bear {
  id: number;
  name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  bears: Bear[];
  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
  addBears: () => void;
  doNothing: () => void;
  clearBears: () => void;

  totalBears: () => number;
}

export const useBearStore = create<BearState>()((set, get) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  bears: [{ id: 1, name: "Oso Nro 1" }],

  totalBears: () => get().blackBears + get().pandaBears + get().polarBears,

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),
  doNothing: () => set((state) => ({ bears: [...state.bears] })),

  addBears: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}` },
      ],
    })),

  clearBears: () => set({ bears: [] }),
}));
