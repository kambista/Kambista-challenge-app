import { Text, TextInput, View } from "react-native";

export default function CurrencyBox({ title, currency, value }: any) {
  return (
    <View className="flex flex-row mb-2.5">
      <View className="bg-gray-component w-[60%] rounded-tl-xl rounded-bl-xl p-3 ">
        <Text className="font-montserrat-regular text-kambista-blue text-lg ">
          {title}
        </Text>
        <TextInput
          keyboardType="numeric"
          className="font-montserrat-bold text-kambista-blue text-xl  "
        >
          {value}
        </TextInput>
      </View>
      <View className="bg-kambista-blue rounded-tr-xl w-[40%] rounded-br-xl justify-center ">
        <Text className="font-montserrat-bold text-white-component text-xl p-4 self-center">
          {currency}
        </Text>
      </View>
    </View>
  );
}
