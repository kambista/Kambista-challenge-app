import { Text, TouchableOpacity, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import FooterMenu from "../components/FooterMenu/FooterMenu";
import KambistaSelector from "../components/KambistaSelector";
import { SELECTOR_ITEMS } from "../util/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Accounts() {
  const nav = useNavigation();
  return (
    <KambistaBackground backButtons>
      <Text className="font-montserrat-bold text-2xl self-center mb-9">
        Cuentas
      </Text>
      <View className="pl-8 pr-8 flex-1">
        <KambistaSelector
          placeholder="Cuentas bancarias"
          items={SELECTOR_ITEMS.accounts}
        />
      </View>
      <TouchableOpacity
        className="items-end pb-[21px] pr-[35px]"
        onPress={() => nav.navigate("AddAccount" as never)}
      >
        <Ionicons name="add-circle" size={35} color="black" />
      </TouchableOpacity>
      <FooterMenu />
    </KambistaBackground>
  );
}
