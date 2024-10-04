import { Image, ScrollView, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import WhiteContainer from "../components/WhiteContainer";
import InfoBox from "../components/InfoBox";
import KambistaInput from "../components/KambistaInput";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";

export default function DataExchange() {
  const nav = useNavigation();
  return (
    <KambistaBackground style="bg-white-background" step={1} backButtons>
      <ScrollView>
        <Text className="font-montserrat-regular text-md self-center ">
          El tipo de cambio podría actualizar en 00:00:00
        </Text>
        <Text className="font-montserrat-bold text-2xl self-center mt-3 text-center">
          Completa los datos de tu operación
        </Text>
        <WhiteContainer style="mt-7">
          <View className="flex-row justify-between">
            <Text className="font-montserrat-regular text-lg mb-2.5">
              Tú envías
            </Text>
            <Text className="font-montserrat-bold text-lg">$100.00</Text>
          </View>
          <View className="flex-row justify-between border-b border-gray-300 ">
            <Text className="font-montserrat-regular text-lg mb-2.5 ">
              Tú recibes
            </Text>
            <Text className="font-montserrat-bold text-lg">S/343.00</Text>
          </View>
          <Text className="font-montserrat-bold text-md mt-2.5">
            Tipo de cambio utilizado 3.433
          </Text>
        </WhiteContainer>
        <View className="pl-4 pr-4 mt-3">
          <InfoBox
            info="Tiempo estimado de espera BCP, Interbank y BanBif: 15 min. (aplica para cualquier monto). Otros bancos 1 día útil."
            style="bg-blue-info mb-6"
            infoStyle="text-blue-900"
          />
        </View>
        <View className="pl-4 pr-4 ">
          <KambistaInput
            title="¿Desde qué banco nos envías tu dinero?"
            placeholder="Selecciona"
          />
          <KambistaInput
            title="¿En qué cuenta deseas recibir tu dinero?"
            placeholder="Selecciona"
          />
          <KambistaInput title="Origen de fondos" placeholder="Selecciona" />
          <SubmitButton
            text="CONTINUAR"
            onPress={() => nav.navigate("KambistaExchange" as never)}
          />
        </View>
      </ScrollView>
    </KambistaBackground>
  );
}
