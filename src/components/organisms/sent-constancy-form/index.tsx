import { ScrollView, Text, View } from "react-native";
import { ConstancyCardStyleSheet } from "./style";
import Constancy from "./../../../../assets/images/icons/constancy.svg";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Input from "../../molecules/Input";
import { UseSendConstancy } from "../../../hooks/useSendConstancy";

export const SentConstancyFormCard = () => {
  const { code, error, setCode, setError, submit } = UseSendConstancy();

  return (
    <View className="mx-6 flex-1 pb-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="flex-col bg-white justify-center items-center mb-8"
          style={ConstancyCardStyleSheet.card}
        >
          <View className="w-full px-5 flex-col gap-3 py-6">
            <View className="items-center justify-center">
              <Constancy />
            </View>
            <Text className="text-center font-bold text-xl">
              {"Envía tu constancia"}
            </Text>
            <Text className="text-[#060F26] text-base font-light">
              {"Escribe el código de operación del banco aquí"}
            </Text>
            <Input
              label=""
              error={error}
              value={code}
              containerClassName="my-2 text-center"
              placeholer="Ingresa el codigo"
              onChangeText={(value) => {
                setCode(value);
                setError("");
              }}
            />
            <View className="flex-row gap-2 items-center">
              <AntDesign name="questioncircleo" size={18} color={"#060F26"} />
              <Text className="text-sm text-[#060F26] ">
                {"¿Donde encuentro el código de operación?"}
              </Text>
            </View>
            <Text className="text-[#060F26] text-sm">
              {
                "Verificaremos tu operación para depositar S/ 343.00 a tu cuenta."
              }
            </Text>
          </View>
        </View>
        <Button
          onPress={submit}
          buttonColor={code.length > 0 ? "#00E3C2" : "#00E3C233"}
          textColor={code.length > 0 ? "#060F26" : "#060F2677"}
          style={ConstancyCardStyleSheet.style_button}
          contentStyle={ConstancyCardStyleSheet.contentStyle_button}
        >
          {"ENVIA TU CONSTANCIA"}
        </Button>
      </ScrollView>
    </View>
  );
};
