import { View } from "react-native";
import { BottomBar } from "../../atoms/bottom-bar";
import { ExchangeForm } from "../../organisms/exchange-form";
import { HeaderLight } from "../../atoms/header/header-light";

const ExchangeAmountage = () => {
  return (
    <View className=" flex-1">
      <HeaderLight />
      <View className="flex-1">
        <ExchangeForm />
      </View>
      <BottomBar />
    </View>
  );
};
export default ExchangeAmountage;
