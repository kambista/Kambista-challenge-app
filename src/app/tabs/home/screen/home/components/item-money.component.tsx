import { Text, TextInput, View } from "react-native";
import { twMerge } from "tailwind-merge";

interface Props {
	classNameContainer?: string;
	value: string;
	nameCurrency: string;
	title: string;
	onChangeText?: (value: string) => void;
	readOnly?: boolean;
}

export const ItemMoneyComponent = ({
	classNameContainer,
	onChangeText,
	value,
	nameCurrency,
	title,
	readOnly,
}: Props) => {
	const handleChange = (value: string) => {
		onChangeText && onChangeText(value);
	};

	return (
		<View
			className={twMerge("rounded-lg h-[70px] flex-row", classNameContainer)}
		>
			<View className="rounded-l-lg bg-[#E0E0E0] flex-1 py-2.5 px-5">
				<Text className="font-normal text-sm text-text-700 leading-[17px] mb-2">
					{title}
				</Text>
				<TextInput
					className="font-bold text-xl leading-[20px]"
					value={value}
					keyboardType="numeric"
					readOnly={readOnly}
					onChangeText={handleChange}
				/>
			</View>
			<View className="rounded-r-lg bg-text-700 w-[112px] items-center justify-center py-2.5 px-5">
				<Text className="font-bold text-base text-white">{nameCurrency}</Text>
			</View>
		</View>
	);
};
