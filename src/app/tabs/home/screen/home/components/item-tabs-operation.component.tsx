import { Pressable, Text } from "react-native";
import { twMerge } from "tailwind-merge";
import { DataTypeSaleProps } from "../interface/home.interface";

interface Props {
	item: DataTypeSaleProps;
	onPress: (id: number) => void;
	typeSale: number;
}

export const ItemTabsOperationComponent = ({
	item,
	onPress,
	typeSale,
}: Props) => {
	return (
		<Pressable
			className={twMerge(
				"rounded-t-md items-center justify-center p-3 w-1/2",
				typeSale === item.id ? "bg-text-700" : "bg-white"
			)}
			onPress={() => onPress(item.id)}
		>
			<Text
				className={twMerge(
					"font-bold text-sm leading-[17px]",
					typeSale === item.id ? "text-white" : "text-[#66666680]"
				)}
			>
				{item.name}: {item.value}
			</Text>
		</Pressable>
	);
};
