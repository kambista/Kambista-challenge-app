import { Pressable, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { getTexts } from "../util/textFormatter";

interface KambistaCheckBoxProps {
  style?: string;
  texts?: any;
  checked?: boolean;
  onPress?: any;
}
export default function KambistaCheckBox({
  style,
  texts,
  checked,
  onPress,
}: KambistaCheckBoxProps) {
  return (
    <TouchableOpacity
      className={`flex-row items-center mb-4 ${style}`}
      onPress={onPress}
    >
      <Pressable
        className={`border-2 border-gray-500 w-[19px] h-[19px] rounded-md mr-3 ${
          checked && "bg-kambista-blue border-kambista-blue"
        }`}
      >
        <Text className="font-montserrat-semibold text-kambista-blue">
          {checked && <FontAwesome name="check" size={14} color="white" />}
        </Text>
      </Pressable>
      <Text className="flex-1">{texts && getTexts(texts)}</Text>
    </TouchableOpacity>
  );
}
