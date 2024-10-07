import { createContext } from "react";
import { UserContextDefault } from "./constants";

export const UserContext = createContext({ ...UserContextDefault });
