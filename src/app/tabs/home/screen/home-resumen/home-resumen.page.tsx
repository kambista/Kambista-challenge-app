import {
	ButtonComponent,
	CardComponent,
	HeaderComponent,
	TextCopyComponent,
} from "@/src/components";
import IconStar from "@/src/constants/images/icon-star";
import { useTransferenciaContext } from "@/src/hooks/context.hooks";
import { RootStackParamList } from "@/src/interface/router.interface";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View, Image, Pressable } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

type NavigationProps = NavigationProp<RootStackParamList>;

export const HomeResumenPage = () => {
	const inset = useSafeAreaInsets();
	const { transferenciaMoney } = useTransferenciaContext();
	const navigation = useNavigation<NavigationProps>();

	const handleNext = () => {};

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View
				className="flex-1 bg-[#F6F6F9] relative"
				style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
			>
				<HeaderComponent isBack={false} isClose={false} />

				<View className="px-6 py-[34px] flex-1">
					<CardComponent classNameContainer="mb-4 pt-0">
						<View className="items-center mb-3">
							<Image source={require("@/assets/images/monedas-cerdito.png")} />
						</View>

						<Text className="font-bold text-text-700 text-xl leading-[24px] text-center">
							¡Constancia enviada!
						</Text>

						<View className="w-full h-[1px] bg-[#A7A7A7] my-3" />

						<TextCopyComponent
							text="km20ttfff"
							title="Código Kambista"
							classNameContainer="mb-2.5"
						/>

						<Text className="font-medium text-text-700 text-sm leading-[17px] mb-2.5">
							*Usa tu código para dar seguimiento a tu operación.
						</Text>

						<TextCopyComponent
							text={`${transferenciaMoney?.destiny.typeCurrency || ""} ${
								transferenciaMoney?.destiny.value || ""
							}`}
							title="Monto a recibir"
							isCopy={false}
							classNameContainer="mb-2.5"
						/>
						<TextCopyComponent
							text="1 día útil"
							title="Tiempo estimado de espera"
							isCopy={false}
						/>
					</CardComponent>

					<View className="items-center justify-center my-5 flex-row">
						<IconStar />
						<Text className="text-text-700 leading-[19px] text-base font-medium underline ml-3">
							Recomienda y gana
						</Text>
					</View>

					<Text className="text-text-700 leading-[17px] text-sm font-normal text-center mb-4">
						Verificaremos tu operación. Puedes ver su estado en “Operaciones”.
					</Text>

					<ButtonComponent
						name="IR A MIS OPERACIONES"
						onPress={() => handleNext()}
					/>

					<Pressable
						onPress={() => navigation.navigate("home")}
						className="mt-4"
					>
						<Text className="font-semibold text-sm leading-[17px] underline text-center">
							Volver al Inicio
						</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
};
