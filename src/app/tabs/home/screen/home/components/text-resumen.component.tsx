import { Text, View } from "react-native";

interface Props {
	currency: string;
	amount: string;
	rate: number;
}

export const TextResumenComponent = ({ currency, amount, rate }: Props) => {
	return (
		<View className="flex-row items-start justify-between mt-2">
			<View className="w-[48%]">
				<Text className="font-monserrat400 text-text-700 leading-[18px] mb-1 text-sm">
					Ahorro estimado:
				</Text>
				<Text className="font-monserrat500 text-text-700 leading-[18px] text-sm">
					{currency} {amount}
				</Text>
			</View>

			<View className="w-[48%] items-end">
				<Text className="font-monserrat400 text-text-700 leading-[18px] mb-1 text-sm">
					Tipo de cambio:
				</Text>
				<Text className="font-monserrat500 text-text-700 leading-[18px] text-sm">
					{rate}
				</Text>
			</View>
		</View>
	);
};
