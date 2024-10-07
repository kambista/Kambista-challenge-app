import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useState } from "react";
import { useTransferenciaContext } from "../../../../../hooks/context.hooks";
import { HeaderComponent } from "../../../../../components/form/layout/header.component";
import { LineNavegacionComponent } from "../../components";
import {
	ButtonComponent,
	CardComponent,
	InputComponent,
} from "../../../../../components/form";
import IconConstancia from "../../../../../constants/images/icon-constancia";

export const HomePayment3Page = () => {
	const inset = useSafeAreaInsets();
	const navigation = useNavigation();
	const { transferenciaMoney } = useTransferenciaContext();
	const [valueText, setValueText] = useState<string>("");

	const handleNext = () => {
		navigation.navigate("home/resumen");
	};

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View
				className="flex-1 bg-[#F6F6F9] relative"
				style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
			>
				<HeaderComponent />

				<LineNavegacionComponent />

				<View className="px-6 py-[34px] flex-1">
					<CardComponent classNameContainer="mb-4">
						<View className="items-center mb-3">
							<IconConstancia />
						</View>

						<Text className="text-center font-monserrat700 text-xl leading-[20px] text-text-700 mb-6">
							Envía tu constancia
						</Text>
						<Text className="font-monserrat400 text-base leading-[19px] text-text-700 mb-3">
							Escribe el código de operación del banco aquí
						</Text>

						<InputComponent
							keyboardType="numeric"
							value={valueText}
							onChangeText={(value) => setValueText(value)}
							classNameContainer="mb-1"
						/>

						<View className="flex-row items-center mb-[26px]">
							<FontAwesome name="question-circle-o" size={14} color="#060F26" />
							<Text className="font-monserrat500 text-xs leading-[24px] ml-1">
								¿Donde encuentro el código de operación?
							</Text>
						</View>

						<Text className="font-monserrat500 text-xs text-gray-600 leading-[17px]">
							Verificaremos tu operación para depositar{" "}
							{transferenciaMoney?.destiny.typeCurrency || ""}{" "}
							{transferenciaMoney?.destiny.value || ""} a tu cuenta.
						</Text>
					</CardComponent>

					<Text className="mt-[44px] mb-[38px] text-gray-600 leading-[17px] text-sm font-monserrat700 underline text-center">
						Detalle de tu operación
					</Text>

					<ButtonComponent
						name="ENVIA TU CONSTANCIA"
						onPress={() => handleNext()}
						disabled={valueText === ""}
					/>
				</View>
			</View>
		</ScrollView>
	);
};
