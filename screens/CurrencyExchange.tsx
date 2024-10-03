import { Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../store/store";

export default function CurrencyExchange() {
  function BearCounter() {
    const bears = useStore((state: any) => state.bears);
    return <Text>{bears} around here...</Text>;
  }
  return (
    <View>
      <Text>CurrencyExchange</Text>
      <Text>CurrencyExchange</Text>
      <Text>CurrencyExchange</Text>
      <Text>CurrencyExchange</Text>
      <TouchableOpacity>{BearCounter()}</TouchableOpacity>
    </View>
  );
}
