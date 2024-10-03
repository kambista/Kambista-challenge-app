import { Text, TextInput, View } from "react-native";

export default function CurrencyBox({ title, value }: any) {
  return (
    <View className="flex-row mb-2.5">
      <View className="bg-gray-component flex-1 rounded-tl-xl rounded-bl-xl p-4 pr-9">
        <Text className=" text-kambista-blue text-lg ">¿Cuánto envías?</Text>
        <TextInput
          keyboardType="numeric"
          className=" text-kambista-blue text-xl font-bold "
        >
          {value}
        </TextInput>
      </View>
      <View className="bg-kambista-blue rounded-tr-xl flex-1 rounded-br-xl justify-center ">
        <Text className="text-white-component text-xl p-4 self-center">
          {title}
        </Text>
      </View>
    </View>
  );
}
