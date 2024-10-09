import { Image, Text, TouchableOpacity } from "react-native";
import { useStore } from "../../store/store";

interface FooterMenuItemProps {
  title: string;
  source: any;
  style?: string;
  onPress?: any;
  screenName?: string;
}
export default function FooterMenuItem({
  title,
  source,
  style,
  onPress,
  screenName,
}: FooterMenuItemProps) {
  const activeMenu = useStore((state: any) => state.activeMenu);
  return (
    <TouchableOpacity
      className={`flex-1 items-center justify-between self-center`}
      onPress={onPress}
    >
      <Image
        className={`w-6 h-5 mb-1 ${
          activeMenu === screenName ? "opacity-100" : "opacity-30"
        } ${style}`}
        source={source}
      />
      <Text className="font-montserrat-regular text-kambista-blue text-[10px]">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
