import { Pressable, ScrollView, Text, View } from "react-native";
import { ConstancyCardStyleSheet } from "./style";
import Transferencias from "./../../../../assets/images/icons/transferencias.svg";
import { Button } from "react-native-paper";
import { TransferCard } from "../../molecules/transfer-card";
import { UseAuthContext } from "../../../contexts/auth/auth-hook";
import { UseExchangeContext } from "../../../contexts/exchange/exchange-hook";
import { accountTypes } from "../../../constants/mock";
import { UseUserContext } from "../../../contexts/user/user-hook";
import { useNavigation } from "@react-navigation/native";

export const ExchangeResumenCard = () => {
  const { session } = UseAuthContext();
  const { accounts } = UseUserContext();
  const { form } = UseExchangeContext();
  const navigation = useNavigation();
  return (
    <View className="mx-6 flex-1 pb-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="flex-col bg-white justify-center items-center mb-0"
          style={ConstancyCardStyleSheet.card}
        >
          <View className="w-full px-5 flex-col gap-3 py-6">
            <View className="items-center justify-center">
              <Transferencias />
            </View>
            <Text className="text-center font-bold text-xl">
              {"Transfiere a kambista "}
            </Text>
            <Text className="text-[#060F26] text-base font-light">
              {
                "Transfiere desde tu app bancaria y guarda el número o código de operación para el siguiente paso."
              }
            </Text>
          </View>
          <View className="border w-[80%] p-4 rounded-lg border-[#CCCCCC] mb-8">
            <TransferCard
              name={session?.fullName || ""}
              accountNumber={form.accountSelected.value}
              accountType={
                accounts.find(
                  (v) => v.accountNumber === form.accountSelected.value
                )?.accountType.value || ""
              }
              amount={form.buyValue}
              bank={form.bank.value}
              identifierType={session?.documentType.value || ""}
              identifier={session?.documentNumber || ""}
            />
          </View>
        </View>
        <Pressable
          onPress={() => {
            // navigation.navigate("exchange-amount");
          }}
        >
          <Text className="underline text-center font-semibold my-6">
            {"Detalle de tu operación"}
          </Text>
        </Pressable>
        <Button
          onPress={() => {
            navigation.navigate("sent-constancy-code");
          }}
          buttonColor={"#00E3C2"}
          textColor={"#060F26"}
          style={ConstancyCardStyleSheet.style_button}
          contentStyle={ConstancyCardStyleSheet.contentStyle_button}
        >
          {"YA HICE MI TRANSFERENCIA"}
        </Button>
      </ScrollView>
    </View>
  );
};
