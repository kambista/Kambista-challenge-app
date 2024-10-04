import { Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import KambistaInput from "../components/KambistaInput";
import InfoBox from "../components/InfoBox";
import KambistaCheckBox from "../components/KambistaCheckBox";
import SubmitButton from "../components/SubmitButton";

export default function AddAccount() {
  const infoText =
    "Operamos en Lima con todos los bancos. Y en provincia con el BCP y cuentas digitales Interbank.";
  return (
    <KambistaBackground>
      <Text className="font-montserrat-bold text-2xl self-center mb-6">
        Agregar Cuenta
      </Text>
      <View className="pl-8 pr-8 flex-1">
        <KambistaInput title="Tipo de cuenta" placeholder="Ahorros" />
        <KambistaInput title="Banco" placeholder="Selecciona" />
        <InfoBox
          style={"bg-blue-info mb-6"}
          infoStyle={"text-blue-900"}
          info={infoText}
        />
        <KambistaInput
          title="Número de cuenta"
          placeholder="Escribe cuenta destino"
        />
        <KambistaInput
          title="Ponle nombre a tu cuenta"
          placeholder="Escribe un alias"
        />
        <KambistaCheckBox text="Declaro que esta cuenta es mía" />
        <SubmitButton text="AGREGAR CUENTA" style="mt-6" />
      </View>
    </KambistaBackground>
  );
}
