import { Text } from "react-native";

interface ScreenTitleProps {
  title: string;
  textStyle?: string;
}
export default function ScreenTitle({ title, textStyle }: ScreenTitleProps) {
  return (
    <Text
      className={`font-montserrat-bold text-2xl self-center text-center ${textStyle}`}
    >
      {title}
    </Text>
  );
}
