import { Text, TextInput, View } from "react-native";

export default function CurrencyBox({ title, value }: any) {
  return (
    <View className="flex-row mb-2.5">
      <View className="bg-gray-component flex-2 rounded-tl-xl rounded-bl-xl p-4 pr-9">
        <Text className="font-montserrat-regular text-kambista-blue text-lg ">
          ¿Cuánto envías?
        </Text>
        <TextInput
          keyboardType="numeric"
          className="font-montserrat-bold text-kambista-blue text-xl "
        >
          {value}
        </TextInput>
      </View>
      <View className="bg-kambista-blue rounded-tr-xl flex-1 rounded-br-xl justify-center ">
        <Text className="font-montserrat-bold text-white-component text-xl p-4 self-center">
          {title}
        </Text>
      </View>
    </View>
  );
}
