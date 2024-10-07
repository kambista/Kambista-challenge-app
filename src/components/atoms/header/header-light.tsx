import { Pressable, Text, View } from "react-native";
import LogoWeb from "./../../../../assets/images/logo-web.svg";
import Notifications from "./../../../../assets/images/icons/notifications.svg";
export const HeaderLight = () => {
  return (
    <View className="flex-row px-6 pt-6">
      <Pressable className="w-14">
        <Notifications />
      </Pressable>
      <View className="flex-1 items-center justify-center flex-row">
        <LogoWeb height={36} width={150} />
      </View>
      <View className="w-14"></View>
    </View>
  );
};
