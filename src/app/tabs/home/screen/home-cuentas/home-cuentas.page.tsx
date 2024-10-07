import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
	HeaderComponent,
	SelectComponent,
	TitleComponent,
} from "@/src/components";
import { dataCuentas } from "@/src/constants/data/data-home";
import { RootStackParamList } from "@/src/interface/router.interface";

type NavigationProps = NavigationProp<RootStackParamList>;

export const HomeCuentasPage = () => {
	const inset = useSafeAreaInsets();
	const navigation = useNavigation<NavigationProps>();

	const handleChangeCuenta = (value: { id: number; name: string }) => {
		console.log(value);
		navigation.navigate("home/payment-1");
	};

	const handleAddCuenta = () => {
		navigation.navigate("home/add-cuenta");
	};

	return (
		<View
			className="flex-1 bg-[#F6F6F9] relative"
			style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
		>
			<HeaderComponent />

			<View className="p-4 py-[34px] flex-1">
				<TitleComponent text="Cuentas" classNameContainer="mb-[34px]" />
				<SelectComponent
					data={dataCuentas}
					onChange={handleChangeCuenta}
					value=""
					placeholder="Cuentas bancarias"
				/>
			</View>

			<Pressable
				className="w-8 h-8 rounded-full bg-text-700 absolute bottom-5 right-4 items-center justify-center"
				onPress={handleAddCuenta}
			>
				<FontAwesome6 name="add" size={18} color="white" />
			</Pressable>
		</View>
	);
};
