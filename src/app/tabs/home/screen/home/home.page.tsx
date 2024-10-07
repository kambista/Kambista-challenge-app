import { Text, View } from "react-native";
import { HeaderHomeComponent } from "../../components/header-home.component";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ConvertMoneyHomeComponent } from "./components/convert-money-home.componet";

export const HomePage = () => {
	const inset = useSafeAreaInsets();
	return (
		<View
			className="flex-1 bg-[#F6F6F9]"
			style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
		>
			<View className="p-4">
				<HeaderHomeComponent />
				<ConvertMoneyHomeComponent />
			</View>
		</View>
	);
};
