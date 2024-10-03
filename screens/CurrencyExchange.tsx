import { View } from "react-native";
import TopSide from "../components/CurrencyExchange/TopSide";
import Calculator from "../components/CurrencyExchange/Calculator";
import FooterMenu from "../components/FooterMenu/FooterMenu";

export default function CurrencyExchange() {
  return (
    <View className="flex-1 bg-white-background">
      <View className="flex-1">
        <TopSide />
        <Calculator />
      </View>
      <FooterMenu />
    </View>
  );
}
