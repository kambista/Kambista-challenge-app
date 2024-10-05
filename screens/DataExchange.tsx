import { ScrollView, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import WhiteContainer from "../components/WhiteContainer";
import InfoBox from "../components/InfoBox";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import KambistaSelector from "../components/KambistaSelector";
import { SELECTOR_ITEMS } from "../util/constants";

export default function DataExchange() {
  const nav = useNavigation();
  return (
    <KambistaBackground style="bg-white-background" step={1} backButtons>
      <ScrollView>
        <Text className="font-montserrat-regular text-md self-center mt-5">
          El tipo de cambio podría actualizar en 00:00:00
        </Text>
        <Text className="font-montserrat-bold text-2xl self-center mt-3 text-center">
          Completa los datos de tu operación
        </Text>
        <WhiteContainer style="mt-7">
          <View className="flex-row justify-between">
            <Text className="font-montserrat-regular text-[16px] mb-2.5">
              Tú envías
            </Text>
            <Text className="font-montserrat-bold text-[16px]">$100.00</Text>
          </View>
          <View className="flex-row justify-between border-b border-gray-300 ">
            <Text className="font-montserrat-regular text-[16px] mb-2.5 ">
              Tú recibes
            </Text>
            <Text className="font-montserrat-bold text-[16px]">S/343.00</Text>
          </View>
          <Text className="font-montserrat-bold text-[12px] mt-2.5">
            Tipo de cambio utilizado{" "}
            {<Text className="text-red-600 line-through">3.422</Text>} 3.433
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
          <KambistaSelector
            title="¿Desde qué banco nos envías tu dinero?"
            placeholder="Selecciona"
            items={SELECTOR_ITEMS.banks}
            containerStyle="mb-4"
          />
          <KambistaSelector
            title="¿En qué cuenta deseas recibir tu dinero?"
            placeholder="Selecciona"
            items={SELECTOR_ITEMS.accounts}
            containerStyle="mb-4"
          />
          <KambistaSelector
            title="Origen de fondos"
            placeholder="Selecciona"
            items={SELECTOR_ITEMS.foundSource}
            containerStyle="mb-9"
          />
          <SubmitButton
            text="CONTINUAR"
            onPress={() => nav.navigate("KambistaExchange" as never)}
          />
        </View>
      </ScrollView>
    </KambistaBackground>
  );
}
