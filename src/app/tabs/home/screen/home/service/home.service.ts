import { httpClient } from "../../../../../../service/api-conig";
import { CalculateParameterProps } from "../interface/home.interface";

const calculateConvert = async (parameter: CalculateParameterProps) => {
	const {
		active = "S",
		amount,
		destinationCurrency,
		originCurrency,
	} = parameter;
	return await httpClient({
		url: `exchange/calculates?originCurrency=${originCurrency}&destinationCurrency=${destinationCurrency}&amount=${amount}&active=${active}`,
		method: "GET",
	});
};

export const homeService = {
	calculateConvert,
};
