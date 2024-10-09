import { View } from "react-native";

interface WhiteContainerProps {
  children: any;
  outerStyle?: string;
  style?: string;
}
export default function WhiteContainer({
  children,
  outerStyle,
  style,
}: WhiteContainerProps) {
  return (
    <View className={`pl-4 pr-4 ${outerStyle}`}>
      <View className={`p-5 bg-white-component h-50 w-50 rounded-lg ${style} `}>
        {children}
      </View>
    </View>
  );
}
