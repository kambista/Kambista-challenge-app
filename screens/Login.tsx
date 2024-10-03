import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
// import useCurrencyStore from "../../store/store";

export default function Login() {
  const nav = useNavigation();
  //   const currency = useCurrencyStore((state) => state.currency);
  //   const setCurrency = useCurrencyStore((state) => state.setCurrency);
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
    </View>
  );
}
