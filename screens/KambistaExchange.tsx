import { Image, ScrollView, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import WhiteContainer from "../components/WhiteContainer";
import CustomText from "../components/CustomText";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { getTexts } from "../util/textFormatter";
import { TEXT_CONSTANTS } from "../util/constants";
import { useStore } from "../store/store";

export default function KambistaExchange() {
  const nav = useNavigation();
  const isExchangeBid = useStore((state: any) => state.isExchangeBid);
  const amount = parseFloat(useStore((state: any) => state.amount));
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
          <Text className="font-montserrat-bold text-[20px] self-center mt-3 mb-3">
            Transfiere a Kambista
          </Text>
          <Text className="font-montserrat-regular text-[16px] self-center">
            {getTexts(TEXT_CONSTANTS.ExchangeSuggestion)}
          </Text>
          <WhiteContainer style="mt-3 border border-gray-400">
            <CustomText title="Destino" subTitle="Interbank" />
            <CustomText
              title="Monto"
              subTitle={`${isExchangeBid ? "$" : "S/"} ${amount.toFixed(2)}`}
            >
              <Image
                className="w-[16px] h-[15px] ml-4"
                source={require("../assets/Copycat.png")}
              />
            </CustomText>
            <CustomText title="Número de cuenta" subTitle="201010000000000">
              <Image
                className="w-[16px] h-[15px] ml-4"
                source={require("../assets/Copycat.png")}
              />
            </CustomText>
            <CustomText title="RUC" subTitle="20601708141">
              <Image
                className="w-[16px] h-[15px] ml-4"
                source={require("../assets/Copycat.png")}
              />
            </CustomText>
            <CustomText title="Titular de la cuenta" subTitle="Kambista SAC" />
            <CustomText title="Tipo de cuenta " subTitle="Corriente" />
          </WhiteContainer>
        </WhiteContainer>
        <Text className="font-montserrat-bold text-gray-input text-md self-center mt-3 text-center underline">
          Detalle de su operación
        </Text>
        <View className="pl-4 pr-4 mt-6">
          <SubmitButton
            text="Ya hice mi transferencia"
            onPress={() => nav.navigate("Voucher" as never)}
          />
        </View>
      </ScrollView>
    </KambistaBackground>
  );
}
