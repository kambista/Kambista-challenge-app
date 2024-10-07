import { useContext } from "react";
import { AuthContext } from "./auth-context";

export const UseAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
