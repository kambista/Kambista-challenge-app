import { createContext } from "react";
import { AuthContextDefault } from "./constants";

export const AuthContext = createContext({ ...AuthContextDefault });
