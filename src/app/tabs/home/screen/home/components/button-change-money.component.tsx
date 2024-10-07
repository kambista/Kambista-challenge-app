import Feather from "@expo/vector-icons/Feather";
import { Pressable, View } from "react-native";

interface Props {
	onPress: () => void;
}

export const ButtonChangeMoneyComponent = ({ onPress }: Props) => {
	return (
		<Pressable
			className="absolute bg-[#00000026] w-[62px] h-[62px] rounded-full items-center justify-center top-1/2 -translate-y-[31px] right-[81px]"
			onPress={onPress}
		>
			<View className="w-[38px] h-[38px] bg-white rounded-full items-center justify-center">
				<Feather name="refresh-ccw" size={20} color="#060F26" />
			</View>
		</Pressable>
	);
};
