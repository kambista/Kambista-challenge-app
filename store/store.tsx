import { create } from "zustand";

export const useStore = create((set) => ({
  bears: 0,
  amount: 1000,
  rate: 3.433,
  exchange: 1000 * 3.433,
  currentCurrency: "USD",
  exchangeCurrency: "PEN",
  isExchangeBid: true,
  updateRate: (newRate: any) => set({ rate: newRate }),
  updateIsExchangeBid: (newIsExchangeBid: any) =>
    set({ isExchangeBid: newIsExchangeBid }),
  updateAmount: (newAmount: any) => set({ amount: newAmount }),
  updateExchange: (newExchange: any) => set({ exchange: newExchange }),
  increaseAmount: () => set((state: any) => ({ amount: state.amount + 1 })),
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));
