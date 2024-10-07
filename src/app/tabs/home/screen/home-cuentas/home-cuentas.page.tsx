import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { HeaderComponent } from "../../../../../components/form/layout/header.component";
import { TitleComponent } from "../../../../../components/form/general";
import { SelectComponent } from "../../../../../components/form";
import { dataCuentas } from "../../../../../constants/data/data-home";

export default function HomeCuentasPage() {
	const inset = useSafeAreaInsets();
	const navigation = useNavigation();

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
}
