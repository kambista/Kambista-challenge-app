import { Image, Text, View } from "react-native";
import { getTexts } from "../util/textFormatter";

interface InfoBoxProps {
  style?: string;
  infoStyle?: string;
  texts?: any;
  imageStyle?: string;
}
export default function InfoBox({
  style,
  infoStyle,
  texts,
  imageStyle,
}: InfoBoxProps) {
  return (
    <View className={`rounded-lg p-4 flex-row ${style}`}>
      <Image
        className={`w-6 h-6 ${imageStyle}`}
        source={require("../assets/HelpCircle.png")}
      />
      <View className="pl-3 pr-3 flex-1">
        <Text className={`font-montserrat-regular text-[11px] ${infoStyle}`}>
          {texts && getTexts(texts)}
        </Text>
      </View>
    </View>
  );
}
