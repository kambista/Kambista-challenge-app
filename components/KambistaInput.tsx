import { Text, TextInput, View } from "react-native";

export default function KambistaInput({ title, placeholder, numeric }: any) {
  return (
    <View className="mb-6  min-w-[49%]">
      <Text className="font-montserrat-semibold text-gray-input text-md mb-2">
        {title}
      </Text>
      <TextInput
        keyboardType={numeric && "numeric"}
        placeholder={placeholder}
        className="text-md  h-12 rounded-lg p-4 font-montserrat-regular text-kambista-blue border border-gray-input-border"
      />
    </View>
  );
}
