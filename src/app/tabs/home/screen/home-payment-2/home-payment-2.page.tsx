import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LineNavegacionComponent } from "../../components";

import { RootStackParamList } from "@/src/interface/router.interface";
import {
	ButtonComponent,
	CardComponent,
	HeaderComponent,
	TextCopyComponent,
} from "@/src/components";
import { useTransferenciaContext } from "@/src/hooks/context.hooks";
import IconTransferencia from "@/src/constants/images/icon-transferencia";

type NavigationProps = NavigationProp<RootStackParamList>;

export const HomePayment2Page = () => {
	const inset = useSafeAreaInsets();
	const navigation = useNavigation<NavigationProps>();
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
						<Text className="font-semibold text-xs leading-[24px] mr-2 text-[#666666CC]">
							El tipo de cambio podría actualizarse en
						</Text>
						<Text className="font-black text-[#666666CC] text-base leading-[19px]">
							13:15
						</Text>
					</View>

					<CardComponent classNameContainer="mb-4">
						<View className="items-center mb-3">
							<IconTransferencia />
						</View>

						<Text className="text-center font-bold text-xl leading-[20px] text-text-700 mb-3">
							Transfiere a kambista{" "}
						</Text>

						<Text className="font-light leading-[19px] text-base text-text-700 mb-3">
							Transfiere desde tu app bancaria y guarda el{" "}
							<Text className="underline font-medium">
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

					<Text className="text-[#666666] text-sm font-bold text-center leading-[17px] underline mb-[26px]">
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
