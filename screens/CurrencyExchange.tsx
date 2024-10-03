import { Text, View } from "react-native";
import { useStore } from "../store/store";
import TopSide from "../components/CurrencyExchange/TopSide";
import Calculator from "../components/CurrencyExchange/Calculator";

export default function CurrencyExchange() {
  function BearCounter() {
    const bears = useStore((state: any) => state.bears);
    return <Text>{bears} around here...</Text>;
  }
  return (
    <View className="flex-1 bg-white-background">
      <TopSide />
      <Calculator />
    </View>
  );
}
