import { Image, ImageBackground, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

function getStepper(step: number) {
  switch (step) {
    case 1:
      return require("../assets/FirstStep.png");
    case 2:
      return require("../assets/SecondStep.png");
    case 3:
      return require("../assets/ThirdStep.png");
  }
}

export default function KambistaBackground({
  children,
  style,
  step,
  backButtons,
}: any) {
  const nav = useNavigation();
  return (
    <ImageBackground
      className="flex-1"
      resizeMode="stretch"
      source={require("../assets/kambista_background.jpeg")}
    >
      {backButtons && (
        <View className="h-[5%] flex-row justify-between pl-5 pr-5 items-center">
          <AntDesign
            name="left"
            size={28}
            color="white"
            onPress={() => nav.goBack()}
          />
          <AntDesign
            name="close"
            size={28}
            color="white"
            onPress={() => nav.navigate("CurrencyExchange" as never)}
          />
        </View>
      )}
      <View className={`h-[${backButtons ? 7 : 12}%] justify-end`}>
        <Image
          className="self-center w-[282px] h-[23px]"
          source={step && getStepper(step)}
        />
      </View>
      <View className={`h-[88%] pt-5 ${style}`}>{children}</View>
    </ImageBackground>
  );
}
