import { useContext } from "react";
import { ExchangeContext } from "./exchange-context";

export const UseExchangeContext = () => {
  const context = useContext(ExchangeContext);
  return context;
};
