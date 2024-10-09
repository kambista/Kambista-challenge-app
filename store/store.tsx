import { create } from "zustand";

export const useStore = create((set) => ({
  bears: 0,
  amount: 1000.0,
  rate: 0,
  exchange: 0,
  isExchangeBid: true,
  savingsRate: 0,
  localBidRate: 3.713,
  localAskRate: 3.833,
  updateSavingsRate: (newSavings: any) => set({ savingsRate: newSavings }),
  updateRate: (newRate: any) => set({ rate: newRate }),
  updateIsExchangeBid: (newIsExchangeBid: any) =>
    set({ isExchangeBid: newIsExchangeBid }),
  updateAmount: (newAmount: any) => set({ amount: newAmount }),
  updateExchange: (newExchange: any) => set({ exchange: newExchange }),
}));
