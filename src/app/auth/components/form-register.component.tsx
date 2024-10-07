import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { Text, View } from "react-native";
import {
	initialValuesRegisterFormik,
	validateSchemaRegisterFormik,
} from "../formik/register.formik";
import { useAuthContext } from "../../../hooks/context.hooks";
import { useState } from "react";
import {
	ButtonComponent,
	CheckboxComponent,
	InputComponent,
	SelectComponent,
} from "../../../components/form";
import { dataCompany, dataTypeDocument } from "../../../constants/data/data";
import { InfoComponent } from "../../../components/form/general";

export const FormRegisterComponent = () => {
	const navigation = useNavigation();
	const [loading, setLoading] = useState<boolean>(false);
	const { handleSaveUser } = useAuthContext();

	const {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
		isValid,
	} = useFormik({
		initialValues: initialValuesRegisterFormik,
		validationSchema: validateSchemaRegisterFormik,
		onSubmit: () => handleRegister(),
	});

	const handleRegister = () => {
		try {
			setLoading(true);

			const parameter = {
				name: values.name,
				typeDocument: values.typeDocument,
				numDocument: values.numDocument,
				phone: values.phone,
				otherComnpany: values.otherCompany,
			};

			handleSaveUser(parameter);
			navigation.navigate("home/cuentas");
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View className="px-[27px] pb-[46px]">
			{/* NAMES */}
			<View className="mb-6">
				<InputComponent
					label="Nombres completos "
					placeholder="Escribe tu nombre"
					value={values.name}
					onChangeText={handleChange("name")}
					onBlur={handleBlur("name")}
					error={errors.name}
					touched={touched.name}
				/>
			</View>
			{/* TYPE DOCUMENT / NUMBER DOCUMENT */}
			<View className="flex flex-row justify-between">
				<SelectComponent
					data={dataTypeDocument}
					onChange={(item) => setFieldValue("typeDocument", item.id)}
					value={values.typeDocument}
					label="Documento"
					classNameContainer="w-[48%]"
					error={errors.typeDocument}
					touched={touched.typeDocument}
				/>

				<InputComponent
					label="Número"
					keyboardType="numeric"
					placeholder="Número Doc"
					classNameContainer="w-[48%]"
					value={values.numDocument}
					onChangeText={handleChange("numDocument")}
					onBlur={handleBlur("numDocument")}
					error={errors.numDocument}
					touched={touched.numDocument}
				/>
			</View>

			{/* INFO */}

			<InfoComponent classNameContainer="flex-row items-start my-6">
				<Octicons name="question" size={20} color="#082774" />
				<Text className="ml-3 text-xs text-[#456DD3CC] font-monserrat400 leading-[14px] flex-1">
					Tu documento de identidad debe coincidir con tus datos para evitar
					incovenientes al momento de hacer una primera operación.
				</Text>
			</InfoComponent>

			{/* PHONE */}
			<View className="mb-6">
				<InputComponent
					label="Número de celular"
					placeholder="Número de celular"
					keyboardType="numeric"
					value={values.phone}
					onChangeText={handleChange("phone")}
					onBlur={handleBlur("phone")}
					error={errors.phone}
					touched={touched.phone}
				/>
			</View>

			<View>
				<SelectComponent
					data={dataCompany}
					onChange={(item) => setFieldValue("otherCompany", item.id)}
					value={values.otherCompany}
					label="¿Dónde cambiaste antes? (Opcional)"
				/>
			</View>

			{/* Terminos y condiciones */}
			<View className="mt-7">
				<CheckboxComponent
					onPress={(state) => setFieldValue("terminos", state)}
					value={values.terminos}
					labelRender={
						<Text className="ml-3 text-xs font-monserrat300 leading-[15px]">
							He leído y acepto los{" "}
							<Text className="font-monserrat600 underline">
								Términos y condiciones
							</Text>
						</Text>
					}
					classNameContainer="mb-4"
				/>
				<CheckboxComponent
					onPress={(state) => setFieldValue("politica", state)}
					value={values.politica}
					labelRender={
						<Text className="ml-3 text-xs font-monserrat300 leading-[15px] flex-1">
							Acepto de manera expresa e informada la{" "}
							<Text className="font-monserrat600 underline">
								Política de Tratamiento de Datos personales de Kambista
							</Text>
						</Text>
					}
				/>
			</View>

			<ButtonComponent
				name="Continuar"
				onPress={() => handleSubmit()}
				classNameContainer="mt-8"
				loading={loading}
				disabled={!isValid}
			/>
		</View>
	);
};
