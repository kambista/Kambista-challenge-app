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
      source={require("../assets/kambistaBackground.jpeg")}
    >
      <View className="h-[5%] flex-row justify-between pl-5 pr-5 items-center">
        {backButtons && (
          <>
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
          </>
        )}
      </View>
      <View className={`justify-end pb-1.5 flex-1`}>
        {step && (
          <Image
            className="self-center w-[259px] h-[20px]"
            source={getStepper(step)}
          />
        )}
      </View>
      <View className={`h-[88%] ${style}`}>{children}</View>
    </ImageBackground>
  );
}
