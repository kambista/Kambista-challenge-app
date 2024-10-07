import {
  ScrollView,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Input from "../../molecules/Input";
import { Button } from "react-native-paper";
import { RegisterAccountFormStyleSheet } from "./styles";
import { UseRegisterAccount } from "../../../hooks/useRegisterAccount";
import Checkbox from "../../molecules/checkbox";
import Disclaimer from "../../molecules/disclaimer";
import { DisclaimerConstants } from "../../molecules/disclaimer/constants";
import SelectInputDialog from "../../molecules/select";
import { accountTypes, banksList } from "../../../constants/mock";

const RegisterAccountForm = () => {
  const { form, setForm, errors, setErrors, submit, handlerMoney } =
    UseRegisterAccount();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-col">
        <Text className="font-bold text-center text-2xl mb-6">
          {"Agregar Cuenta"}
        </Text>

        {/* inputs */}

        <View className="flex-col gap-4">
          <SelectInputDialog
            error={errors.accountType}
            value={form.accountType}
            setValue={(value) => {
              setForm({ ...form, accountType: value });
              setErrors({ ...errors, accountType: "" });
            }}
            containerClassName={"flex-1"}
            label="Tipo de cuenta"
            placeholder="Seleccione"
            data={accountTypes}
          />
          <SelectInputDialog
            error={errors.bank}
            value={form.bank}
            setValue={(value) => {
              setForm({ ...form, bank: value });
              setErrors({ ...errors, bank: "" });
            }}
            containerClassName={"flex-1"}
            label="Banco"
            placeholder="Seleccione"
            data={banksList}
          />
        </View>

        <Disclaimer
          color="#082774"
          text={DisclaimerConstants.registerAccount}
        />

        {/* Money */}

        <View className="mb-2">
          <Text>{"Moneda"}</Text>
        </View>
        <View className="flex-row justify-center items-center gap-6 mb-4 px-1">
          <Button
            onPress={() => {
              handlerMoney("soles");
            }}
            buttonColor={form.moneyType === "soles" ? "#060F26" : "#FFF"}
            textColor={form.moneyType === "soles" ? "#fff" : "#000"}
            contentStyle={
              RegisterAccountFormStyleSheet.contentStyle_moneyButtonSelected
            }
            style={RegisterAccountFormStyleSheet.style_moneyButtonSelected}
          >
            {"Soles"}
          </Button>

          <Button
            onPress={() => {
              handlerMoney("dolares");
            }}
            buttonColor={form.moneyType === "dolares" ? "#060F26" : "#FFF"}
            textColor={form.moneyType === "dolares" ? "#fff" : "#000"}
            contentStyle={
              RegisterAccountFormStyleSheet.contentStyle_moneyButtonSelected
            }
            style={RegisterAccountFormStyleSheet.style_moneyButtonSelected}
          >
            {"Dolares"}
          </Button>
        </View>

        {/* Inputs */}

        <Input
          error={errors.accountNumber}
          value={form.accountNumber}
          onChangeText={(value) => {
            setForm({ ...form, accountNumber: value });
            setErrors({ ...errors, accountNumber: "" });
          }}
          containerClassName="mb-4"
          label="Número de cuenta"
          placeholer="Escribe tu cuenta de destino"
        />
        <Input
          error={errors.accountName}
          value={form.accountName}
          onChangeText={(value) => {
            setForm({ ...form, accountName: value });
            setErrors({ ...errors, accountName: "" });
          }}
          containerClassName="mb-2"
          label="Ponle nombre a tu cuenta"
          placeholer="Escribe un alias"
        />
        <Checkbox
          error={errors.declaration}
          onPress={() => {
            setForm({ ...form, declaration: !form.declaration });
            setErrors({ ...errors, declaration: "" });
          }}
          value={form.declaration}
          label={
            <Text
              style={
                errors?.declaration
                  ? RegisterAccountFormStyleSheet.errorText
                  : RegisterAccountFormStyleSheet.commonText
              }
            >
              {"Declaro que esta cuenta es mía."}
            </Text>
          }
        />
        <Button
          onPress={submit}
          buttonColor="#00E3C2"
          textColor="#060F26"
          contentStyle={RegisterAccountFormStyleSheet.button}
          style={RegisterAccountFormStyleSheet.button}
        >
          {"Continuar"}
        </Button>
      </View>
    </ScrollView>
  );
};
export default RegisterAccountForm;
