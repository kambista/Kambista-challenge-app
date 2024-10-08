import { Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import KambistaInput from "../components/KambistaInput";
import InfoBox from "../components/InfoBox";
import KambistaCheckBox from "../components/KambistaCheckBox";
import SubmitButton from "../components/SubmitButton";
import KambistaSelector from "../components/KambistaSelector";
import { SELECTOR_ITEMS, TEXT_CONSTANTS } from "../util/constants";
import { useNavigation } from "@react-navigation/native";
import BoxBorder from "../components/BoxBorder";

export default function AddAccount() {
  const infoText =
    "Operamos en Lima con todos los bancos. Y en provincia con el BCP y cuentas digitales Interbank.";
  const nav = useNavigation();
  return (
    <KambistaBackground backButtons>
      <Text className="font-montserrat-bold text-2xl self-center mb-6">
        Agregar Cuenta
      </Text>
      <View className="pl-8 pr-8 flex-1">
        <View className="mb-6">
          <KambistaSelector
            placeholder="Selecciona"
            title="Tipo de cuenta"
            items={SELECTOR_ITEMS.accountTypes}
          />
        </View>
        <View className="mb-6">
          <KambistaSelector
            title="Banco"
            placeholder="Selecciona"
            items={SELECTOR_ITEMS.banks}
          />
        </View>
        <InfoBox
          style={"bg-blue-info mb-6"}
          infoStyle={"text-blue-800 text-[12px]"}
          info={infoText}
          texts={TEXT_CONSTANTS.AvailabilityZone}
        />
        <View className={`mb-6 h-[71px]`}>
          <Text className="font-montserrat-bold text-md mb-2">Moneda</Text>
          <View className="flex-row justify-between">
            <BoxBorder
              textStyle={"font-montserrat-bold text-[14px]"}
              boxStyle={"bg-kambista-blue max-w-[45%] "}
              title="Soles"
            />
            <BoxBorder
              textStyle={"font-montserrat-bold text-[14px] text-kambista-blue"}
              boxStyle={
                "bg-white-component max-w-[45%] border border-gray-input-border"
              }
              title="Dólares"
            />
          </View>
        </View>
        <KambistaInput
          title="Número de cuenta"
          placeholder="Escribe cuenta destino"
        />
        <KambistaInput
          title="Ponle nombre a tu cuenta"
          placeholder="Escribe un alias"
        />
        <KambistaCheckBox texts={TEXT_CONSTANTS.Statement} />
        <SubmitButton
          text="AGREGAR CUENTA"
          style="mt-6"
          onPress={() => nav.navigate("Accounts" as never)}
        />
      </View>
    </KambistaBackground>
  );
}
