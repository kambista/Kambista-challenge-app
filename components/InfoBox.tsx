import { Image, Text, View } from "react-native";

interface InfoBoxProps {
  info: string;
  style?: string;
  infoStyle?: string;
}
export default function InfoBox({ info, style, infoStyle }: InfoBoxProps) {
  return (
    <View className={`rounded-lg p-4 flex-row ${style}`}>
      <Image
        className="w-6 h-6 "
        source={require("../assets/help_circle.png")}
      />
      <View className="pl-3 pr-3 ">
        <Text className={`font-montserrat-regular text-[11px] ${infoStyle}`}>
          {info}
        </Text>
      </View>
    </View>
  );
}
