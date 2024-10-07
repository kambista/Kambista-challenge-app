import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderComponent } from "../../../../../components/form/layout/header.component";
import {
	InfoComponent,
	TitleComponent,
} from "../../../../../components/form/general";
import {
	ButtonComponent,
	CheckboxComponent,
	InputComponent,
	SelectComponent,
} from "../../../../../components/form";
import {
	dataBancos,
	dataTipoCuentas,
} from "../../../../../constants/data/data-home";
import {
	initialValuesAddCuentaFormik,
	validateSchemaAddCuentaFormik,
} from "./formik/add-cuenta.formik";
import { ToggleCurrencyComponent } from "./components/toggle-currency.component";

export const HomeAddCuentaPage = () => {
	const inset = useSafeAreaInsets();
	const navigation = useNavigation();

	const {
		values,
		errors,
		touched,
		handleSubmit,
		setFieldValue,
		handleChange,
		handleBlur,
	} = useFormik({
		initialValues: initialValuesAddCuentaFormik,
		validationSchema: validateSchemaAddCuentaFormik,
		onSubmit: () => handleAdd(),
	});

	const handleAdd = () => {
		navigation.navigate("home/cuentas");
	};

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View
				className="flex-1 bg-[#F6F6F9] relative"
				style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
			>
				<HeaderComponent />

				<View className="p-4 py-[34px] flex-1">
					<TitleComponent
						text="Agregar cuenta"
						classNameContainer="mb-[34px]"
					/>
					<SelectComponent
						data={dataTipoCuentas}
						onChange={(item) => setFieldValue("tipoCuenta", item.id)}
						value={values.tipoCuenta}
						placeholder="Cuentas bancarias"
						label="Tipo de cuenta"
						classNameContainer="mb-6"
						error={errors.tipoCuenta}
						touched={touched.tipoCuenta}
					/>

					<SelectComponent
						data={dataBancos}
						onChange={(item) => setFieldValue("banco", item.id)}
						value={values.banco}
						placeholder="Selecciona"
						label="Banco"
						error={errors.banco}
						touched={touched.banco}
					/>

					<InfoComponent classNameContainer="flex-row items-start my-6">
						<Feather name="info" size={20} color="#082774" />

						<Text className="ml-3 text-xs text-third-700 font-monserrat500 leading-[14px] flex-1">
							Operamos en Lima con todos los bancos. Y en provincia con el BCP y
							cuentas digitales Interbank.
						</Text>
					</InfoComponent>

					<ToggleCurrencyComponent
						active={values.typeCurrency}
						onChange={(id) => setFieldValue("typeCurrency", id)}
					/>

					<InputComponent
						label="Número de cuenta"
						keyboardType="numeric"
						placeholder="Escribe tu cuenta de destino"
						value={values.numero_cuenta}
						onChangeText={handleChange("numero_cuenta")}
						onBlur={handleBlur("numero_cuenta")}
						error={errors.numero_cuenta}
						touched={touched.numero_cuenta}
						classNameContainer="mb-6"
					/>

					<InputComponent
						label="Ponle nombre a tu cuenta"
						keyboardType="default"
						placeholder="Ponle nombre a tu cuenta"
						value={values.alias_cuenta}
						onChangeText={handleChange("alias_cuenta")}
						onBlur={handleBlur("alias_cuenta")}
						classNameContainer="mb-6"
					/>
					<CheckboxComponent
						onPress={(state) => setFieldValue("isMyCuenta", state)}
						value={false}
						label="Declaro que esta cuenta es mía."
						classNameContainer="mb-6"
					/>

					<ButtonComponent
						name="AGREGAR CUENTA"
						onPress={() => handleSubmit()}
					/>
				</View>
			</View>
		</ScrollView>
	);
};
