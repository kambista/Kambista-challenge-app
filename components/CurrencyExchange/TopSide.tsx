import { Image, View } from "react-native";

export default function TopSide() {
  return (
    <View className="flex flex-row items-center p-4">
      <View className="flex-4 bg-green-400">
        <Image
          className="w-6 h-7"
          source={require("../../assets/notification.png")}
        />
      </View>
      <View className="flex-1 bg-blue-400 pr-10">
        <Image
          className="w-40 h-12 self-center bg-red-500"
          source={require("../../assets/kambista_logo.png")}
        />
      </View>
    </View>
  );
}
