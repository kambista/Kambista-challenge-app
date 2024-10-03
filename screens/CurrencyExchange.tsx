import { View } from "react-native";
import TopSide from "../components/CurrencyExchange/TopSide";
import Calculator from "../components/CurrencyExchange/Calculator";

export default function CurrencyExchange() {
  return (
    <View className="flex-1 bg-white-background">
      <TopSide />
      <Calculator />
    </View>
  );
}
