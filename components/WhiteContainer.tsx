import { View } from "react-native";

export default function WhiteContainer({ children, style }: any) {
  return (
    <View className={`pl-4 pr-4`}>
      <View
        className={`p-5 bg-white-component h-50 w-50 rounded-lg  ${style} `}
      >
        {children}
      </View>
    </View>
  );
}
