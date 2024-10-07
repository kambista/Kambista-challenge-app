import { View } from "react-native";
import { AppHeader } from "../../atoms/header";
import { ExchangeResumenCard } from "../../organisms/exchange-resumen-card";
import Stepper from "../../molecules/stepper";
import { stepsDefault } from "../../../contexts/exchange/constants";

const ExchangeResumenPage = () => {
  return (
    <View className=" flex-1">
      <AppHeader logo close goBack />
      <Stepper steps={stepsDefault} currentStep={1} />
      <View className="flex-1">
        <ExchangeResumenCard />
      </View>
    </View>
  );
};
export default ExchangeResumenPage;
