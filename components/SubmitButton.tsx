import { Text, TouchableOpacity, View } from "react-native";

export default function SubmitButton({ text }: { text: string }) {
  return (
    <View className="p-4">
      <TouchableOpacity className="bg-kambista-green rounded-lg h-12 justify-center">
        <Text className="font-montserrat-semibold text-kambista-blue text-lg self-center">
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
