import { Text, TouchableOpacity, View } from "react-native";

interface BoxBorderProps {
  title: string;
  boxStyle?: any;
  textStyle?: any;
  onPress?: any;
}
export default function BoxBorder({
  title,
  boxStyle,
  textStyle,
  onPress,
}: BoxBorderProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 bg-red-500 justify-center items-center h-10 rounded-lg ${boxStyle}`}
    >
      <Text className={`text-white text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
}
