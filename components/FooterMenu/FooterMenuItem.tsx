import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FooterMenuItem({ title, source, style, onPress }: any) {
  return (
    <TouchableOpacity
      className={`flex-1 items-center justify-between self-center`}
      onPress={onPress}
    >
      <Image className={`w-6 h-5 mb-1 ${style}`} source={source} />
      <Text className="font-montserrat-regular text-kambista-blue text-[10px]">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
