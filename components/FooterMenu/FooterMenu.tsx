import { View } from "react-native";
import FooterMenuItem from "./FooterMenuItem";
import { useNavigation } from "@react-navigation/native";

export default function FooterMenu() {
  const nav = useNavigation();
  return (
    <View className="flex flex-row bg-white-component p-3 border-t border-gray-300">
      <FooterMenuItem
        source={require("../../assets/Exchange.png")}
        title="Inicio"
        onPress={() => nav.navigate("CurrencyExchange" as never)}
      />
      <FooterMenuItem
        source={require("../../assets/Task.png")}
        title="Operaciones"
      />
      <FooterMenuItem
        style="w-7"
        source={require("../../assets/Card.png")}
        title="Cuentas"
        onPress={() => nav.navigate("Accounts" as never)}
      />
      <FooterMenuItem
        source={require("../../assets/Bell.png")}
        title="Notificaciones"
      />
      <FooterMenuItem
        style="h-5 w-4"
        source={require("../../assets/Profile.png")}
        title="Perfil"
      />
    </View>
  );
}
