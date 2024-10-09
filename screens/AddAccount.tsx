import { ScrollView, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import KambistaInput from "../components/KambistaInput";
import InfoBox from "../components/InfoBox";
import KambistaCheckBox from "../components/KambistaCheckBox";
import SubmitButton from "../components/SubmitButton";
import KambistaSelector from "../components/KambistaSelector";
import { SELECTOR_ITEMS, TEXT_CONSTANTS } from "../util/constants";
import { useNavigation } from "@react-navigation/native";
import BoxBorder from "../components/BoxBorder";
import { useState } from "react";

export default function AddAccount() {
  const nav = useNavigation();
  const [currency, setCurrency] = useState("USD");
  const [checkState, setCheckState] = useState(false);
  return (
    <KambistaBackground backButtons>
      <ScrollView className="flex-1">
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
            texts={TEXT_CONSTANTS.AvailabilityZone}
          />
          <View className={`mb-6 h-[71px]`}>
            <Text className="font-montserrat-bold text-md mb-2">Moneda</Text>
            <View className="flex-row justify-between">
              <BoxBorder
                textStyle={`font-montserrat-bold text-[14px] ${
                  currency === "PEN"
                    ? "text-white-component"
                    : "text-kambista-blue"
                }`}
                boxStyle={`${
                  currency === "PEN"
                    ? "bg-kambista-blue"
                    : "bg-white-component border border-gray-input-border  "
                } max-w-[45%]`}
                title="Soles"
                onPress={() => setCurrency("PEN")}
              />
              <BoxBorder
                textStyle={`font-montserrat-bold text-[14px] ${
                  currency === "USD"
                    ? "text-white-component"
                    : "text-kambista-blue"
                }`}
                boxStyle={`bg-white-component max-w-[45%] border border-gray-input-border ${
                  currency === "USD"
                    ? "bg-kambista-blue"
                    : "bg-white-component border border-gray-input-border  "
                } `}
                title="Dólares"
                onPress={() => setCurrency("USD")}
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
          <KambistaCheckBox
            texts={TEXT_CONSTANTS.Statement}
            checked={checkState}
            onPress={() => setCheckState(!checkState)}
          />
          <SubmitButton
            text="AGREGAR CUENTA"
            style="mt-6"
            disabled={!checkState}
            onPress={() => nav.navigate("Accounts" as never)}
          />
        </View>
      </ScrollView>
    </KambistaBackground>
  );
}
