import { ScrollView, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import KambistaInput from "../components/KambistaInput";
import InfoBox from "../components/InfoBox";
import KambistaCheckBox from "../components/KambistaCheckBox";
import SubmitButton from "../components/SubmitButton";
import KambistaSelector from "../components/KambistaSelector";
import { SELECTOR_ITEMS, TEXT_CONSTANTS } from "../util/constants";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import ScreenTitle from "../components/ScreenTitle";
import AccountCurrencyType from "../components/Accounts/AccountCurrencyType";
import { useStore } from "../store/store";

export default function AddAccount() {
  const nav = useNavigation();
  const [checkState, setCheckState] = useState(false);
  const updateActiveMenu = useStore((state: any) => state.updateActiveMenu);
  return (
    <KambistaBackground
      backButtons
      onBackPressed={() => updateActiveMenu("Accounts")}
    >
      <ScrollView className="flex-1">
        <ScreenTitle title="Agregar Cuenta" textStyle={"mb-6"} />
        <KambistaSelector
          placeholder="Selecciona"
          title="Tipo de cuenta"
          style={"text-gray-input"}
          items={SELECTOR_ITEMS.accountTypes}
          containerStyle={"mb-4 pl-8 pr-8 flex-1"}
        />
        <KambistaSelector
          title="Banco"
          style={"text-gray-input"}
          placeholder="Selecciona"
          items={SELECTOR_ITEMS.banks}
          containerStyle={"mb-6 pl-8 pr-8 flex-1"}
        />
        <View className="pl-8 pr-8 flex-1">
          <InfoBox
            style={"bg-blue-info mb-4"}
            infoStyle={"text-blue-800 text-[12px]"}
            texts={TEXT_CONSTANTS.AvailabilityZone}
          />
          <AccountCurrencyType />
          <KambistaInput
            title="Número de cuenta"
            placeholder="Escribe cuenta destino"
            textStyle={"text-gray-input"}
            containerStyle={"mb-4"}
          />
          <KambistaInput
            title="Ponle nombre a tu cuenta"
            placeholder="Escribe un alias"
            textStyle={"text-gray-input"}
          />
          <KambistaCheckBox
            texts={TEXT_CONSTANTS.Statement}
            checked={checkState}
            onPress={() => setCheckState(!checkState)}
          />
          <SubmitButton
            text="AGREGAR CUENTA"
            style="mt-4"
            disabled={!checkState}
            onPress={() => nav.navigate("Accounts" as never)}
          />
        </View>
      </ScrollView>
    </KambistaBackground>
  );
}
