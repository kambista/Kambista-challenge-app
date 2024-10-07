import { Pressable, Text, View } from "react-native";
import { TabsProps } from "./interface";

export const Tabs = ({ tabs, active }: TabsProps) => {
  return (
    <View className="flex-row items-center min-h-[50px] bg-white relative">
      {tabs.map((value) => (
        <Pressable
          key={value.name}
          className={`flex-1 min-h-[50px] items-center justify-center ${
            value.className
          } ${active === value.id ? "bg-black_1" : "bg-white"}`}
          onPress={value.onPress}
        >
          <Text
            className={`${active === value.id ? "text-white" : "text-black"}`}
          >
            {value.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
