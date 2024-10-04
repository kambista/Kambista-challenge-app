import { Image, ScrollView, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import WhiteContainer from "../components/WhiteContainer";

export default function KambistaExchange() {
  return (
    <KambistaBackground style="bg-white-background">
      <ScrollView>
        <Text className="font-montserrat-regular text-md self-center text-gray-input">
          El tipo de cambio podría actualizar en 00:00:00
        </Text>
        <WhiteContainer style="mt-7">
          <Image
            className="self-center w-[55px] h-[55px]"
            source={require("../assets/ExchangePig.png")}
          />
          <Text className="font-montserrat-bold text-2xl self-center mt-3 mb-3">
            Transfiere a Kambista
          </Text>
          <Text className="font-montserrat-regular text-lg self-center">
            Transfiere desde tu app bancaria y guarda el número o código de
            operación para el siguiente paso.
          </Text>
          <WhiteContainer style="mt-7"></WhiteContainer>
        </WhiteContainer>
      </ScrollView>
    </KambistaBackground>
  );
}
