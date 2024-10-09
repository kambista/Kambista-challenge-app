import { dataCurrency } from "@/src/constants/data/data-home";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

interface Props {
	active: number;
	onChange: (id: number) => void;
}

export const ToggleCurrencyComponent = ({ active, onChange }: Props) => {
	return (
		<View className="mb-6">
			<Text className="mb-2 text-sm text-gray-600 font-semibold leading-[16px]">
				Moneda
			</Text>

			<View className="flex-row justify-between">
				{dataCurrency.map((el) => (
					<Pressable
						key={el.id}
						className={twMerge(
							"w-[45%] h-[34px] p-2.5 rounded-[10px] justify-center items-center shadow-md",
							active === el.id ? "bg-text-700" : "bg-white"
						)}
						onPress={() => onChange(el.id)}
					>
						<Text
							className={twMerge(
								"font-medium text-sm leading-[14px]",
								active === el.id ? "text-white" : "text-text-700"
							)}
						>
							{el.name}
						</Text>
					</Pressable>
				))}
			</View>
		</View>
	);
};
