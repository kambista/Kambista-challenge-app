import { Image, View } from "react-native";

export default function TopSide() {
  return (
    <View className="flex flex-row items-center p-5 mb-7">
      <View className="flex-4 ">
        <Image
          className="w-[32px] h-[32px]"
          source={require("../../assets/Bell.png")}
        />
      </View>
      <View className="flex-1 pr-10">
        <Image
          className="w-40 h-12 self-center"
          source={require("../../assets/kambista_logo.png")}
        />
      </View>
    </View>
  );
}
