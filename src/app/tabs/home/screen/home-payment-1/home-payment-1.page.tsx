import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderComponent } from "../../../../../components/form/layout/header.component";
import {
	ButtonComponent,
	CardComponent,
	SelectComponent,
} from "../../../../../components/form";
import { InfoComponent } from "../../../../../components/form/general";
import {
	dataBancos,
	dataCuentas,
	dataFondos,
} from "../../../../../constants/data/data-home";
import { useTransferenciaContext } from "../../../../../hooks/context.hooks";
import {
	initialValuesPayment1Formik,
	validateSchemaPayement1Formik,
} from "./fomik/payment-1.formik";
import { LineNavegacionComponent } from "../../components";

export default function HomePayment1Page() {
	const inset = useSafeAreaInsets();
	const navigation = useNavigation();
	const { transferenciaMoney } = useTransferenciaContext();

	const { values, setFieldValue, errors, touched, handleSubmit, isValid } =
		useFormik({
			initialValues: initialValuesPayment1Formik,
			validationSchema: validateSchemaPayement1Formik,
			onSubmit: () => handleNext(),
		});

	const handleNext = () => {
		navigation.navigate("home/payment-2");
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
					<View className="flex-row items-center justify-center mb-3">
						<Text className="font-monserrat600 text-xs leading-[24px] mr-2 text-[#666666CC]">
							El tipo de cambio podría actualizarse en
						</Text>
						<Text className="font-monserrat900 text-[#666666CC] text-base leading-[19px]">
							00:00:00
						</Text>
					</View>

					<Text className="font-monserrat700 text-text-700 text-xl leading-[24px] text-center mx-auto w-[83%] mb-7">
						Completa los datos de tu operación
					</Text>

					<CardComponent classNameContainer="mb-4">
						<View className="flex-row justify-between items-center mb-2.5">
							<Text className="font-monserrat300 text-text-700 leading-[19px]">
								Tú envías
							</Text>
							<Text className="font-monserrat700 text-text-900 leading-[19px]">
								{transferenciaMoney?.origen.typeCurrency}{" "}
								{transferenciaMoney?.origen.value}
							</Text>
						</View>
						<View className="flex-row justify-between items-center">
							<Text className="font-monserrat300 text-text-700 leading-[19px]">
								Tú recibes
							</Text>
							<Text className="font-monserrat700 text-text-900 leading-[19px]">
								{transferenciaMoney?.destiny.typeCurrency || ""}{" "}
								{transferenciaMoney?.destiny.value || ""}
							</Text>
						</View>

						<View className="h-[1px] w-full bg-[#CCCCCC] my-2.5" />

						<Text className="font-monserrat700 text-text-700 leading-[14px] text-xs">
							Tipo de cambio utilizado{" "}
							<Text className="text-red-700 line-through">3.422</Text>{" "}
							{transferenciaMoney?.rate || ""}
						</Text>
					</CardComponent>

					<InfoComponent classNameContainer="flex-row items-start mb-4">
						<Feather name="info" size={20} color="#082774" />

						<Text className="ml-3 text-xs text-third-700 font-monserrat500 leading-[14px] flex-1">
							Tiempo estimado de espera{" "}
							<Text className="font-monserrat700">
								BCP, Interbank y BanBif: 15 min.
							</Text>{" "}
							(aplica para cualquier monto).{" "}
							<Text className="font-monserrat700">
								Otros bancos 1 día útil.
							</Text>
						</Text>
					</InfoComponent>

					<SelectComponent
						data={dataBancos}
						placeholder="Selecciona"
						label="¿Desde qué banco nos envías tu dinero?"
						classNameContainer="mb-6"
						value={values.idBanco}
						onChange={(item) => setFieldValue("idBanco", item.id)}
						error={errors.idBanco}
						touched={touched.idBanco}
					/>
					<SelectComponent
						data={dataCuentas}
						placeholder="Selecciona"
						label="¿En qué cuenta deseas recibir tu dinero?"
						classNameContainer="mb-6"
						value={values.idCuenta}
						onChange={(item) => setFieldValue("idCuenta", item.id)}
						error={errors.idCuenta}
						touched={touched.idCuenta}
					/>
					<SelectComponent
						data={dataFondos}
						placeholder="Selecciona"
						label="Origen de fondos"
						value={values.idFondo}
						onChange={(item) => setFieldValue("idFondo", item.id)}
						error={errors.idFondo}
						touched={touched.idFondo}
					/>

					<ButtonComponent
						name="Continuar"
						onPress={() => handleSubmit()}
						classNameContainer="mt-8"
						disabled={!isValid}
					/>
				</View>
			</View>
		</ScrollView>
	);
}
