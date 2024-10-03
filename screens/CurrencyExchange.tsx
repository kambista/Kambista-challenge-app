import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../store/store";
import TopSide from "../components/CurrencyExchange/TopSide";
import BoxBorder from "../components/BoxBorder";

export default function CurrencyExchange() {
  function BearCounter() {
    const bears = useStore((state: any) => state.bears);
    return <Text>{bears} around here...</Text>;
  }
  return (
    <View className="flex-1 bg-white-background h-50 w-50">
      <TopSide />
      <View className="flex-row p-4">
        <BoxBorder
          boxStyle={"bg-kambista-blue rounded-bl-none rounded-br-none"}
          title="Compra: 3.321"
        />
        <BoxBorder
          boxStyle={"bg-white-component rounded-bl-none rounded-br-none "}
          textStyle={"text-kambista-blue"}
          title="Venta: 3.341"
        />
      </View>
      <Text>CurrencyExchange</Text>
      <Text>CurrencyExchange</Text>
      <Text>CurrencyExchange</Text>
      <TouchableOpacity>{BearCounter()}</TouchableOpacity>
    </View>
  );
}
