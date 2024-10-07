import { ScrollView, View, Text } from "react-native";
import Disclaimer from "../../molecules/disclaimer";
import Input from "../../molecules/Input";
import RegisterFormHeader from "../../molecules/headers/register-form-header/register-form-header";
import SelectInputDialog from "../../molecules/select";
import { DocumentsTypes, MoneyChangeTypes } from "../../../constants/mock";
import Checkbox from "../../molecules/checkbox";

import { RegisterFormStyleSheet } from "./styles";
import { UseRegister } from "../../../hooks/useRegister";
import { Button } from "react-native-paper";
import { DisclaimerConstants } from "../../molecules/disclaimer/constants";

const RegisterForm = () => {
  const { form, setForm, submit, errors, setErrors } = UseRegister();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-col">
        <RegisterFormHeader />
        <Input
          error={errors.fullName}
          value={form.fullName}
          onChangeText={(value) => {
            setForm({ ...form, fullName: value });
            setErrors({ ...errors, fullName: "" });
          }}
          containerClassName="mb-4"
          label="Nombres completos"
          placeholer="Escribe tu nombre"
        />
        <View className=" flex-row items-center my-2 gap-4">
          <SelectInputDialog
            error={errors.documentType}
            value={form.documentType}
            setValue={(value) => {
              setForm({ ...form, documentType: value });
              setErrors({ ...errors, documentType: "" });
            }}
            containerClassName={"flex-1"}
            label="Documento"
            placeholder="Seleccione"
            data={DocumentsTypes}
          />
          <Input
            error={errors.documentNumber}
            value={form.documentNumber}
            onChangeText={(value) => {
              setForm({ ...form, documentNumber: value });
              setErrors({ ...errors, documentNumber: "" });
            }}
            containerClassName={"flex-1"}
            label="Número"
            placeholer="Número Doc"
          />
        </View>
        <Disclaimer text={DisclaimerConstants.registerForm} />
        <Input
          error={errors.phone}
          value={form.phone}
          onChangeText={(value) => {
            setForm({ ...form, phone: value });
            setErrors({ ...errors, phone: "" });
          }}
          containerClassName="mt-2 mb-6"
          label="Número de celular"
          placeholer="Número de celular"
        />
        <SelectInputDialog
          value={form.moneychanger}
          setValue={(value) => {
            setForm({ ...form, moneychanger: value });
          }}
          containerClassName={"flex-1"}
          label="¿Dónde cambiaste antes? (Opcional)"
          placeholder="Seleccione"
          data={MoneyChangeTypes}
        />
        <View className="my-4">
          <Checkbox
            error={errors.terms}
            onPress={() => {
              setForm({ ...form, terms: !form.terms });
              setErrors({ ...errors, terms: "" });
            }}
            value={form.terms}
            label={
              <Text
                style={errors?.terms ? RegisterFormStyleSheet.errorText : {}}
              >
                {"He leído y acepto los "}
                <Text style={RegisterFormStyleSheet.checkboxBold}>
                  Términos y condiciones
                </Text>
              </Text>
            }
          />
          <Checkbox
            error={errors.policy}
            value={form.policy}
            onPress={() => {
              setForm({ ...form, policy: !form.policy });
              setErrors({ ...errors, policy: "" });
            }}
            label={
              <Text
                style={errors?.policy ? RegisterFormStyleSheet.errorText : {}}
              >
                {"Acepto de manera expresa e informada la "}
                <Text style={RegisterFormStyleSheet.checkboxBold}>
                  Política de Tratamiento de Datos personales de Kambista
                </Text>
              </Text>
            }
          />
        </View>
        <Button
          onPress={submit}
          buttonColor="#00E3C2"
          textColor="#060F26"
          contentStyle={RegisterFormStyleSheet.button}
          style={RegisterFormStyleSheet.button}
        >
          {"Continuar"}
        </Button>
      </View>
    </ScrollView>
  );
};
export default RegisterForm;
