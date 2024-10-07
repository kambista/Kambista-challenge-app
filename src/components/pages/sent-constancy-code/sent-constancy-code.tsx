import { View } from "react-native";
import { AppHeader } from "../../atoms/header";
import { SentConstancyFormCard } from "../../organisms/sent-constancy-form";
import Stepper from "../../molecules/stepper";
import { stepsDefault } from "../../../contexts/exchange/constants";

const SentConstancyCodePage = () => {
  return (
    <View className=" flex-1">
      <AppHeader logo />
      <Stepper steps={stepsDefault} currentStep={2} />
      <View className="flex-1">
        <SentConstancyFormCard />
      </View>
    </View>
  );
};
export default SentConstancyCodePage;
