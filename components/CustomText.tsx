import { View } from "react-native";
import { Text } from "react-native";

export default function CustomText({ children, title, subTitle }: any) {
  return (
    <View>
      <Text className="font-montserrat-semibold text-gray-input text-[12px] mb-1">
        {title}
      </Text>
      <View className="flex-row">
        <Text className="font-montserrat-bold text-kambista-blue text-[14px] mb-3 ml-2">
          {subTitle}
        </Text>
        {children}
      </View>
    </View>
  );
}
