import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useTransferenciaContext } from "../../../../../hooks/context.hooks";
import { HeaderComponent } from "../../../../../components/form/layout/header.component";
import { LineNavegacionComponent } from "../../components";
import { ButtonComponent, CardComponent } from "../../../../../components/form";
import IconTransferencia from "../../../../../constants/images/icon-transferencia";
import { TextCopyComponent } from "../../../../../components/form/general";

export const HomePayment2Page = () => {
	const inset = useSafeAreaInsets();
	const navigation = useNavigation();
	const { transferenciaMoney } = useTransferenciaContext();

	const handleNext = () => {
		navigation.navigate("home/payment-3");
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
					<View className="flex-row items-center mb-3">
						<Text className="font-monserrat600 text-xs leading-[24px] mr-2 text-[#666666CC]">
							El tipo de cambio podría actualizarse en
						</Text>
						<Text className="font-monserrat900 text-[#666666CC] text-base leading-[19px]">
							13:15
						</Text>
					</View>

					<CardComponent classNameContainer="mb-4">
						<View className="items-center mb-3">
							<IconTransferencia />
						</View>

						<Text className="text-center font-monserrat700 text-xl leading-[20px] text-text-700 mb-3">
							Transfiere a kambista{" "}
						</Text>

						<Text className="font-monserrat300 leading-[19px] text-base text-text-700 mb-3">
							Transfiere desde tu app bancaria y guarda el{" "}
							<Text className="underline font-monserrat500">
								número o código de operación
							</Text>{" "}
							para el siguiente paso.
						</Text>

						<View className="border border-[#CCCCCC] py-[14px] px-5 rounded-lg">
							<TextCopyComponent
								classNameContainer="mb-3"
								title="Banco"
								text="Interbank"
								isCopy={false}
							/>
							<TextCopyComponent
								classNameContainer="mb-3"
								title="Monto"
								text={`${transferenciaMoney?.destiny.typeCurrency || ""} ${
									transferenciaMoney?.destiny.value || ""
								}`}
							/>
							<TextCopyComponent
								classNameContainer="mb-3"
								title="Número de cuenta"
								text="201010000000000"
							/>
							<TextCopyComponent
								classNameContainer="mb-3"
								title="RUC"
								text="20601708141"
							/>
							<TextCopyComponent
								classNameContainer="mb-3"
								title="Titular de la cuenta"
								text="Kambista SAC"
								isCopy={false}
							/>
							<TextCopyComponent
								classNameContainer="mb-3"
								title="Tipo de cuenta"
								text="Corriente"
								isCopy={false}
							/>
						</View>
					</CardComponent>

					<Text className="text-[#666666] text-sm font-monserrat700 text-center leading-[17px] underline mb-[26px]">
						Detalle de tu operación
					</Text>
					<ButtonComponent
						name="YA HICE MI TRANSFERENCIA"
						onPress={() => handleNext()}
					/>
				</View>
			</View>
		</ScrollView>
	);
};
