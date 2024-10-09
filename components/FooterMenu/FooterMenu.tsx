import { View } from "react-native";
import FooterMenuItem from "./FooterMenuItem";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../store/store";

export default function FooterMenu() {
  const nav = useNavigation();
  const updateActiveMenu = useStore((state: any) => state.updateActiveMenu);
  function setMenu(menuName: string) {
    updateActiveMenu(menuName);
    nav.navigate(menuName as never);
  }
  return (
    <View className="flex flex-row bg-white-component p-3 border-t border-gray-300">
      <FooterMenuItem
        source={require("../../assets/Exchange.png")}
        title="Inicio"
        screenName="CurrencyExchange"
        onPress={() => setMenu("CurrencyExchange")}
      />
      <FooterMenuItem
        source={require("../../assets/Task.png")}
        title="Operaciones"
      />
      <FooterMenuItem
        style="w-7"
        source={require("../../assets/Card.png")}
        title="Cuentas"
        screenName="Accounts"
        onPress={() => setMenu("Accounts")}
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
