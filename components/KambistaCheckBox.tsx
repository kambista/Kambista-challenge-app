import { Pressable, Text, View } from "react-native";

export default function KambistaCheckBox({ text }: any) {
  return (
    <View className="flex-row items-center mb-4">
      <Pressable className=" border-2 border-gray-500 w-8 h-8 rounded-md justify-center items-center mr-4">
        <Text className="font-montserrat-semibold text-kambista-blue">X</Text>
      </Pressable>
      <Text className="font-montserrat-semibold text-kambista-blue">
        {text}
      </Text>
    </View>
  );
}
