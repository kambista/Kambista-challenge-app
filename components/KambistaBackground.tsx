import { ImageBackground, View } from "react-native";

export default function KambistaBackground({ children, style }: any) {
  return (
    <ImageBackground
      className="flex-1"
      resizeMode="stretch"
      source={require("../assets/kambista_background.jpeg")}
    >
      <View className="h-[12%]  " />
      <View className={`h-[88%] ${style}`}>{children}</View>
    </ImageBackground>
  );
}
