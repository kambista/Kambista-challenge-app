import { Image, Text, View } from "react-native";
import WhiteContainer from "../WhiteContainer";

export default function BankAccount() {
  return (
    <WhiteContainer style="mt-6" outerStyle="pl-8 pr-8 ">
      <View className="flex-row items-center border-b border-gray-300">
        <Image
          className="w-10 h-10"
          source={require("../../assets/Interbank.png")}
        />
        <View className={`p-2  `}>
          <Text className="font-montserrat-bold text-[16px]">
            Cuenta Bancaria de Avelino
          </Text>
          <Text className=" font-montserrat-regular text-[16px]">
            Interbank
          </Text>
        </View>
      </View>
      <View className="pt-3">
        <Text className="font-montserrat-semibold text-[14px]">
          Soles - Ahorros
        </Text>
        <Text className="font-montserrat-regular text-[16px]">
          200000000002
        </Text>
      </View>
    </WhiteContainer>
  );
}
