import { Image, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import WhiteContainer from "../components/WhiteContainer";
import CustomText from "../components/CustomText";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../store/store";

export default function VoucherSent() {
  const nav = useNavigation();
  const exchange = useStore((state: any) => state.exchange);
  const isExchangeBid = useStore((state: any) => state.isExchangeBid);
  return (
    <KambistaBackground style="bg-white-background">
      <WhiteContainer style="pt-0  border border-gray-300">
        <Image
          className="self-center w-[120px] h-[120px] "
          source={require("../assets/MonedasCerdito.png")}
        />
        <Text className="font-montserrat-bold text-[20px] self-center mt-3 p-2 border-b border-gray-300">
          ¡Constancia Enviada!
        </Text>
        <View className="p-5 pb-2">
          <CustomText title="Código Kambista" subTitle="km20ttff" />
          <Text className="font-montserrat-regular text-kambista-blue text-[14px] mb-2.5">
            *Usa tu código para dar seguimiento a tu operación.
          </Text>
          <CustomText
            title="Monto a recibir"
            subTitle={`${!isExchangeBid ? "$" : "S/"} ${exchange}`}
          />
          <CustomText title="Tiempo estimado de espera" subTitle="1 día útil" />
        </View>
      </WhiteContainer>
      <View className=" justify-center p-4 mt-3">
        <View className="flex-row justify-center mb-6">
          <Image
            className="w-[27px] h-[24px] mr-3"
            source={require("../assets/Star.png")}
          />
          <Text className="font-montserrat-semibold text-kambista-blue text-[16px] underline self-center">
            Recomienda y gana
          </Text>
        </View>
        <Text className="font-montserrat-regular text-kambista-blue text-[15px] mb-4 text-center">
          Verificaremos tu operación. Puedes ver su estado en “Operaciones”.
        </Text>
        <SubmitButton text="IR A MIS OPERACIONES" />
      </View>
      <Text
        className="font-montserrat-bold text-gray-input text-md self-center mt-16 text-center underline"
        onPress={() => nav.navigate("CurrencyExchange" as never)}
      >
        Volver al Inicio
      </Text>
    </KambistaBackground>
  );
}
