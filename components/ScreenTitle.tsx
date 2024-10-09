import { Text } from "react-native";

export default function ScreenTitle({ title, textStyle }: any) {
  return (
    <Text
      className={`font-montserrat-bold text-2xl self-center text-center ${textStyle}`}
    >
      {title}
    </Text>
  );
}
