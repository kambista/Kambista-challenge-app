import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { TransferenciaContext } from "../app/tabs/home/context/transferencia.context";

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const useTransferenciaContext = () => {
	return useContext(TransferenciaContext);
};
