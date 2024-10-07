import { useContext } from "react";
import { UserContext } from "./user-context";
import { UserContextProps } from "./interface";

export const UseUserContext = () => {
  const context = useContext<UserContextProps>(UserContext);
  return context;
};
