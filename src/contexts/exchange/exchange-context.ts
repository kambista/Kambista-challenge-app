import { createContext } from "react";
import { ExchangeContextDefault } from "./constants";

export const ExchangeContext = createContext({ ...ExchangeContextDefault });
