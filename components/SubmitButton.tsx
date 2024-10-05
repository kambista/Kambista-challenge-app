import { Text, TouchableOpacity, View } from "react-native";

export default function SubmitButton({
  text,
  style,
  onPress,
}: {
  text: string;
  style?: string;
  onPress?: () => void;
}) {
  return (
    <View className={`flex-1 ${style}`}>
      <TouchableOpacity
        onPress={onPress}
        className="bg-kambista-green rounded-lg h-[50px] justify-center"
      >
        <Text className="font-montserrat-semibold text-kambista-blue self-center">
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
