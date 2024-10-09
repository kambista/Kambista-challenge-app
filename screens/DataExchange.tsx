import { ScrollView, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import WhiteContainer from "../components/WhiteContainer";
import InfoBox from "../components/InfoBox";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import KambistaSelector from "../components/KambistaSelector";
import { SELECTOR_ITEMS, TEXT_CONSTANTS } from "../util/constants";
import { useStore } from "../store/store";
import ScreenTitle from "../components/ScreenTitle";
import TransactionInfoText from "../components/DataExchange.tsx/TransactionInfoText";
import TimeToChange from "../components/DataExchange.tsx/TimeToChange";

export default function DataExchange() {
  const nav = useNavigation();
  const amount = parseFloat(useStore((state: any) => state.amount));
  const exchange = parseFloat(useStore((state: any) => state.exchange));
  const rate = useStore((state: any) => state.rate);
  const isExchangeBid = useStore((state: any) => state.isExchangeBid);
  const localBidRate = useStore((state: any) => state.localBidRate);
  const localAskRate = useStore((state: any) => state.localAskRate);
  const updateDestinationBank = useStore(
    (state: any) => state.updateDestinationBank
  );

  function updateDestinationBankHandler(newDestinationBank: any) {
    updateDestinationBank(newDestinationBank);
  }

  return (
    <KambistaBackground style="bg-white-background" step={1} backButtons>
      <ScrollView>
        <TimeToChange time={"13:10"} />
        <ScreenTitle
          title="Completa los datos de tu operación"
          textStyle={"mt-3"}
        />
        <WhiteContainer style="mt-6">
          <TransactionInfoText
            text="Tú envías"
            currency={isExchangeBid ? "$ " : "S/ "}
            amount={amount}
          />
          <TransactionInfoText
            text="Tú recibes"
            currency={isExchangeBid ? "S/ " : "$ "}
            amount={exchange}
            cointainerStyle="border-b border-gray-300"
          />
          <Text className="font-montserrat-bold text-[12px] mt-2.5">
            Tipo de cambio utilizado{" "}
            {
              <Text className="text-red-600 line-through">
                {isExchangeBid ? localBidRate : localAskRate}
              </Text>
            }{" "}
            {rate}
          </Text>
        </WhiteContainer>
        <View className="pl-4 pr-4 mt-3">
          <InfoBox
            style="bg-blue-info mb-4"
            infoStyle="text-blue-900"
            texts={TEXT_CONSTANTS.EstimatedTime}
          />
        </View>
        <View className="pl-4 pr-4 ">
          <KambistaSelector
            title="¿Desde qué banco nos envías tu dinero?"
            placeholder="Selecciona"
            items={SELECTOR_ITEMS.banks}
            containerStyle="mb-4"
            style="font-montserrat-semibold"
          />
          <KambistaSelector
            title="¿En qué cuenta deseas recibir tu dinero?"
            placeholder="Selecciona"
            items={SELECTOR_ITEMS.accounts}
            containerStyle="mb-4"
            style="font-montserrat-semibold"
            onValueChange={updateDestinationBankHandler}
          />
          <KambistaSelector
            title="Origen de fondos"
            placeholder="Selecciona"
            items={SELECTOR_ITEMS.foundSource}
            containerStyle="mb-8"
            style="font-montserrat-semibold"
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
