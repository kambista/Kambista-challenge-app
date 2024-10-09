import { Text, View } from "react-native";
import BoxBorder from "../BoxBorder";
import { useState } from "react";

export default function AccountCurrencyType() {
  const [currency, setCurrency] = useState("PEN");
  return (
    <View className={`mb-4 h-[71px]`}>
      <Text className="font-montserrat-bold text-gray-input text-md mb-2">
        Moneda
      </Text>
      <View className="flex-row justify-between">
        <BoxBorder
          textStyle={`font-montserrat-semibold text-[14px] ${
            currency === "PEN" ? "text-white-component" : "text-kambista-blue"
          }`}
          boxStyle={`${
            currency === "PEN"
              ? "bg-kambista-blue"
              : "bg-white-component border border-gray-input-border  "
          } max-w-[45%]`}
          title="Soles"
          onPress={() => setCurrency("PEN")}
        />
        <BoxBorder
          textStyle={`font-montserrat-semibold text-[14px] ${
            currency === "USD" ? "text-white-component" : "text-kambista-blue"
          }`}
          boxStyle={`bg-white-component max-w-[45%] border border-gray-input-border ${
            currency === "USD"
              ? "bg-kambista-blue"
              : "bg-white-component border border-gray-input-border  "
          } `}
          title="Dólares"
          onPress={() => setCurrency("USD")}
        />
      </View>
    </View>
  );
}
