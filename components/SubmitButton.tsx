import { Text, TouchableOpacity, View } from "react-native";

export default function SubmitButton({ text }: { text: string }) {
  return (
    <View className="p-4">
      <TouchableOpacity className="bg-kambista-green rounded-lg h-12 justify-center">
        <Text className="text-kambista-blue text-lg font-bold self-center">
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
