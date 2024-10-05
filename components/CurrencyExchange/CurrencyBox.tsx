import { Text, TextInput, View } from "react-native";

export default function CurrencyBox({ title, currency, value }: any) {
  return (
    <View className="flex-row mb-2.5">
      <View className="bg-gray-component w-[70%] rounded-tl-xl rounded-bl-xl pt-[10px] pl-[19px] pb-4">
        <Text className="font-montserrat-regular text-kambista-blue text-[14px] ">
          {title}
        </Text>
        <TextInput
          keyboardType="numeric"
          className="font-montserrat-bold text-kambista-blue text-[20px]  "
        >
          {value}
        </TextInput>
      </View>
      <View className="bg-kambista-blue rounded-tr-xl w-[30%] rounded-br-xl justify-center ">
        <Text className="font-montserrat-bold text-white-component text-[16px] p-4 self-center">
          {currency}
        </Text>
      </View>
    </View>
  );
}
