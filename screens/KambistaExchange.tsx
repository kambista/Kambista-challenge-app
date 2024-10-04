import { Image, ScrollView, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import WhiteContainer from "../components/WhiteContainer";
import CustomText from "../components/CustomText";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";

export default function KambistaExchange() {
  const nav = useNavigation();
  return (
    <KambistaBackground style="bg-white-background" step={2} backButtons>
      <ScrollView>
        <Text className="font-montserrat-regular text-md self-center text-gray-input mt-5">
          El tipo de cambio podría actualizar en 00:00:00
        </Text>
        <WhiteContainer style="mt-[14px]" outerStyle="pl-5 pr-5">
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
          <WhiteContainer style="mt-3 border border-gray-500">
            <CustomText title="Destino" subTitle="Interbank" />
            <CustomText title="Monto" subTitle="S/.1,000.00" />
            <CustomText title="Número de cuenta" subTitle="201010000000000" />
            <CustomText title="RUC" subTitle="20601708141" />
            <CustomText title="Titular de la cuenta" subTitle="Kambista SAC" />
            <CustomText title="Tipo de cuenta " subTitle="Corriente" />
          </WhiteContainer>
        </WhiteContainer>
        <Text className="font-montserrat-bold text-gray-input text-md self-center mt-3 text-center underline">
          Detalle de su operación
        </Text>
        <View className="pl-4 pr-4 mt-3">
          <SubmitButton
            text="Ya hice mi transferencia"
            onPress={() => nav.navigate("Voucher" as never)}
          />
        </View>
      </ScrollView>
    </KambistaBackground>
  );
}
