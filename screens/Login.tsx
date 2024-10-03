import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useStore } from "../store/store";
import KambistaBackground from "../components/KambistaBackground";
import KambistaInput from "../components/KambistaInput";
import InfoBox from "../components/InfoBox";
import SubmitButton from "../components/SubmitButton";
import KambistaCheckBox from "../components/KambistaCheckBox";
// import useCurrencyStore from "../../store/store";

export default function Login() {
  const nav = useNavigation();

  const infoText =
    "Tu documento de identidad debe coincidir con tus datos para evitar inconvenientes al momento de hacer una primera operación.";
  return (
    <KambistaBackground>
      <ScrollView>
        <Text className="font-montserrat-bold text-4xl self-center mb-6">
          ¡Empecemos!
        </Text>
        <Text className="font-montserrat-regular text-md self-center ">
          Completa tus datos como figura en tu DNI
        </Text>
        <View className="pl-5 pr-5 pt-5">
          <KambistaInput
            title="Nombre Completos"
            placeholder="Escribe tu nombre"
          />
          <View className="flex-row justify-between ">
            <KambistaInput title="Documento" placeholder="DNI" />
            <KambistaInput numeric title="Número" placeholder="Número Doc" />
          </View>
          <InfoBox
            info={infoText}
            style={"bg-blue-info mb-6"}
            infoStyle={"text-blue-500"}
          />
          <KambistaInput
            title="Número de celular"
            placeholder="Número celular"
            numeric
          />
          <KambistaInput
            title="¿Dónde cambiaste antes? (Opcional)"
            placeholder="TKambio"
            numeric
          />
          <KambistaCheckBox text="Acepto los Términos y Condiciones" />
          <KambistaCheckBox text="Acepto de manera expresa e informada la Política de Tratamiento de Datos personales de Kambista" />
          <SubmitButton
            onPress={() => nav.navigate("CurrencyExchange" as never)}
            text="CONTINUAR"
          />
          <Text className="mb-10">{""}</Text>
        </View>
      </ScrollView>
    </KambistaBackground>
  );
}
