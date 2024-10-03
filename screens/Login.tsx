import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../store/store";
// import useCurrencyStore from "../../store/store";

export default function Login() {
  const nav = useNavigation();
  //   const currency = useCurrencyStore((state) => state.currency);
  //   const setCurrency = useCurrencyStore((state) => state.setCurrency);
  function BearCounter() {
    const bears = useStore((state: any) => state.bears);
    return <Text>{bears} around here...</Text>;
  }

  function Controls() {
    const increasePopulation = useStore(
      (state: any) => state.increasePopulation
    );
    return (
      <TouchableOpacity onPress={increasePopulation}>
        <Text>one up</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => nav.navigate("CurrencyExchange" as never)}
      >
        <Text>CurrencyExchange</Text>
      </TouchableOpacity>
      <TouchableOpacity>{BearCounter()}</TouchableOpacity>
      <TouchableOpacity>{Controls()}</TouchableOpacity>
    </View>
  );
}
