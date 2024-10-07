import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, View } from "react-native";

interface Props {
	isBack?: boolean;
	isClose?: boolean;
}

export const HeaderComponent = ({ isBack = true, isClose = true }: Props) => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.goBack();
	};

	const handleClose = () => {
		navigation.navigate("home");
	};

	return (
		<View className="w-full bg-text-700 py-4 items-center justify-between flex-row">
			{isBack ? (
				<Pressable onPress={handlePress} className="px-4">
					<Octicons name="chevron-left" size={30} color="white" />
				</Pressable>
			) : (
				<View />
			)}
			<Image source={require("../../../../assets/images/logo.png")} />

			{isClose ? (
				<Pressable onPress={handleClose} className="px-4">
					<MaterialCommunityIcons name="window-close" size={30} color="white" />
				</Pressable>
			) : (
				<View />
			)}
		</View>
	);
};
