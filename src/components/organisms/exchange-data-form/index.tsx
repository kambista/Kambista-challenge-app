import { ScrollView, Text, View } from "react-native";
import SelectInputDialog from "../../molecules/select";
import { banksList, foundsOrigin } from "../../../constants/mock";
import { ExchangeDataFormProps } from "../../../contexts/exchange/interface";
import { UseUserContext } from "../../../contexts/user/user-hook";
import Disclaimer from "../../molecules/disclaimer";
import { RegisterAccountFormStyleSheet } from "../register-account-form/styles";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

interface Props {
  form: ExchangeDataFormProps;
  setForm: (v: any) => void;
}
export const ExchangeDataForm = ({ form, setForm }: Props) => {
  const { accounts } = UseUserContext();
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text className="text-[#666666] text-xs mt-8 mb-4 text-center">
        {"El tipo de cambio podría actualizarse en 00:00:00"}
      </Text>
      <View className="w-[200px] mx-auto">
        <Text className="font-bold text-lg text-center">
          {"Completa los datos de tu operación"}
        </Text>
      </View>
      {/* Card */}
      <View className="flex-col gap-4 bg-white mx-auto w-full p-4 rounded shadow-sm mt-8">
        <View className="flex-row justify-between">
          <Text className="text-[#666666] font-light">{"Tú envías"}</Text>
          <Text className="font-bold text-[#060F26]">{"$ 100.00"}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-[#666666] font-light">{"Tú recibes"}</Text>
          <Text className="font-bold text-[#060F26]">{"S/. 343.00"}</Text>
        </View>
        <Text>{"Tipo de cambio utilizado 3.422  3.433 "}</Text>
      </View>
      <Disclaimer
        color="#082774"
        text="Tiempo estimado de espera BCP, Interbank y BanBif: 15 min. (aplica para cualquier monto). Otros bancos 1 día útil."
      />
      <View className="flex-col gap-4">
        <SelectInputDialog
          value={form.bank}
          // error={error.accounts}
          //   setError({ ...error, accounts: "" });
          setValue={(v) => {
            setForm({ ...form, bank: v });
          }}
          placeholder="Seleccion"
          label="¿Desde qué banco nos envías tu dinero?"
          data={banksList}
        />
        <SelectInputDialog
          value={form.accounts}
          // error={error.accounts}
          //   setError({ ...error, accounts: "" });
          setValue={(v) => {
            setForm({ ...form, accounts: v });
          }}
          placeholder="Seleccion"
          label="¿En qué cuenta deseas recibir tu dinero?"
          data={accounts.map((value) => {
            return {
              label: value.accountName,
              value: value.accountNumber,
            };
          })}
        />
        <SelectInputDialog
          value={form.originFounds}
          // error={error.originFounds}
          //   setError({ ...error, originFounds: "" });
          setValue={(v) => {
            setForm({ ...form, originFounds: v });
          }}
          placeholder="Seleccion"
          label="Origen de fondos"
          data={foundsOrigin}
        />
        <Button
          onPress={() => {
            navigation.navigate("exchange-resumen");
          }}
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
