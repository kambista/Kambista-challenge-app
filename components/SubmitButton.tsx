import { Text, TouchableOpacity, View } from "react-native";

export default function SubmitButton({
  text,
  style,
  onPress,
  disabled,
}: {
  text: string;
  style?: string;
  onPress?: () => void;
  disabled?: boolean;
}) {
  return (
    <View className={`flex-1 ${style}`}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        className={`bg-kambista-green rounded-lg h-[50px] justify-center ${
          disabled ? "opacity-50" : ""
        }`}
      >
        <Text className="font-montserrat-semibold text-kambista-blue self-center">
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
