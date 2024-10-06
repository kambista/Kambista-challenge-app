import { Text, View } from "react-native";

// import IconHeader from "@/assets/images/tabs/tabNotificaciones";

export const HeaderHomeComponent = () => {
	return (
		<View className="flex-row justify-between items-center">
			{/* <IconHeader /> */}
			<View className="flex-row items-center">
				<View className="w-[30px] h-[30px] bg-text-700" />
				<Text className="font-monserrat700 ml-3 text-xl">Kambista</Text>
			</View>
			<View />
		</View>
	);
};
