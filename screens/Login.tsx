import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import KambistaInput from "../components/KambistaInput";
import InfoBox from "../components/InfoBox";
import SubmitButton from "../components/SubmitButton";
import KambistaCheckBox from "../components/KambistaCheckBox";
import KambistaSelector from "../components/KambistaSelector";
import { SELECTOR_ITEMS, TEXT_CONSTANTS } from "../util/constants";
import { useState } from "react";

export default function Login() {
  const nav = useNavigation();
  const [checkTerms, setCheckTerms] = useState(false);
  const [checkPolicies, setCheckPolices] = useState(false);

  return (
    <KambistaBackground backButtons>
      <ScrollView>
        <Text className="font-montserrat-bold text-2xl self-center mb-6">
          ¡Empecemos!
        </Text>
        <Text className="font-montserrat-regular text-[16px] text-center ">
          Completa tus datos como figura en tu DNI
        </Text>
        <View className="pl-5 pr-5 pt-5">
          <KambistaInput
            title="Nombre Completos"
            placeholder="Escribe tu nombre"
          />
          <View className="flex-row justify-between ">
            <View className=" w-[49%]">
              <KambistaSelector
                placeholder="Selecciona"
                title="Tipo de documento"
                items={SELECTOR_ITEMS.documentTypeItems}
              />
            </View>
            <KambistaInput numeric title="Número" placeholder="Número Doc" />
          </View>
          <InfoBox
            style={"bg-blue-info mb-[23px]"}
            infoStyle={"text-blue-500"}
            texts={TEXT_CONSTANTS.DocumentWarning}
          />
          <KambistaInput
            title="Número de celular"
            placeholder="Número celular"
            numeric
            containerStyle="mb-6"
          />
          <KambistaSelector
            title="¿Dónde cambiaste antes? (Opcional)"
            placeholder="Selecciona"
            items={SELECTOR_ITEMS.otherExchangeCompanies}
          />
          <KambistaCheckBox
            style="mt-6"
            texts={TEXT_CONSTANTS.TermsTexts}
            checked={checkTerms}
            onPress={() => setCheckTerms(!checkTerms)}
          />
          <KambistaCheckBox
            texts={TEXT_CONSTANTS.PoliticsTexts}
            style="mb-[30px]"
            checked={checkPolicies}
            onPress={() => setCheckPolices(!checkPolicies)}
          />
          <SubmitButton
            onPress={() => nav.navigate("CurrencyExchange" as never)}
            text="CONTINUAR"
            disabled={!checkTerms || !checkPolicies}
          />
          <Text className="mb-5">{""}</Text>
        </View>
      </ScrollView>
    </KambistaBackground>
  );
}
