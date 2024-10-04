import { Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import KambistaInput from "../components/KambistaInput";
import FooterMenu from "../components/FooterMenu/FooterMenu";

export default function Accounts() {
  return (
    <KambistaBackground backButtons>
      <Text className="font-montserrat-bold text-2xl self-center mb-6">
        Cuentas
      </Text>
      <View className="pl-8 pr-8 flex-1">
        <KambistaInput title="" placeholder="Cuentas bancarias" />
      </View>
      <FooterMenu />
    </KambistaBackground>
  );
}
