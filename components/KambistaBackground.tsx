import { ImageBackground, Text, View } from "react-native";

export default function KambistaBackground({ children }: any) {
  return (
    <ImageBackground
      className="flex-1"
      resizeMode="stretch"
      source={require("../assets/kambista_background.jpeg")}
    >
      <View className="h-[12%]  " />
      <View className="h-[%]">{children}</View>
    </ImageBackground>
  );
}
