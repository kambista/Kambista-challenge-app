import { Text, View } from "react-native";
import SelectInputDialog from "../../molecules/select";
import { useState } from "react";
import { AccountListStyleSheet } from "./styles";
import { ButtonPlus } from "../../atoms/button-plus";
import { useNavigation } from "@react-navigation/native";
import { UseUserContext } from "../../../contexts/user/user-hook";
import { ExchangeNavigationProp } from "../../../routers/interfaces";

export const AccountList = () => {
  const [val, setVal] = useState({ label: "", value: "" });
  const navigation = useNavigation<ExchangeNavigationProp>();
  const { accounts } = UseUserContext();
  return (
    <View className="px-6 flex-1">
      <Text style={AccountListStyleSheet.title}>{"Cuentas"}</Text>
      <SelectInputDialog
        label=""
        value={val}
        data={accounts?.map((value) => ({
          label: `${value.bank.value} - ${value.accountName} `,
          value: value.accountNumber,
        }))}
        placeholder="Cuentas bancarias"
        setValue={(value) => {
          setVal(value);
          navigation.navigate("exchange-data", { value });
        }}
      />
      <ButtonPlus onPress={() => navigation.navigate("accounts-register")} />
    </View>
  );
};
