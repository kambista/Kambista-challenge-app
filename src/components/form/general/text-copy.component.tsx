import { Pressable, Text, View } from "react-native";
import { twMerge } from "tailwind-merge";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface Props {
	classNameContainer?: string;
	title: string;
	text: string;
	isCopy?: boolean;
	onPress?: () => void;
}

export const TextCopyComponent = ({
	classNameContainer,
	title,
	text,
	isCopy = true,
	onPress,
}: Props) => {
	const handleCopy = () => {
		onPress && onPress();
	};

	return (
		<View className={twMerge(classNameContainer)}>
			<Text className="font-monserrat700 text-gray-600 text-xs mb-1">
				{title}
			</Text>
			<View className="flex-row items-center">
				<Text className="font-monserrat700 text-text-700 text-xs">{text}</Text>
				{isCopy ? (
					<Pressable className="ml-4" onPress={handleCopy}>
						<FontAwesome6 name="copy" size={16} color="#4F4F4F" />
					</Pressable>
				) : null}
			</View>
		</View>
	);
};
