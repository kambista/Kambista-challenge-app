import KambistaBackground from "../components/KambistaBackground";
import FooterMenu from "../components/FooterMenu/FooterMenu";
import KambistaSelector from "../components/KambistaSelector";
import { SELECTOR_ITEMS } from "../util/constants";
import ScreenTitle from "../components/ScreenTitle";
import AddAccountIcon from "../components/Accounts/AddAccountIcon";
import BankAccount from "../components/Accounts/BankAccount";
import { View } from "react-native";
import { useStore } from "../store/store";

export default function Accounts() {
  const updateActiveMenu = useStore((state: any) => state.updateActiveMenu);

  return (
    <KambistaBackground
      backButtons
      style="bg-white-background"
      onBackPressed={() => updateActiveMenu("CurrencyExchange")}
    >
      <ScreenTitle title="Cuentas" textStyle="mb-9" />
      <View className="flex-1">
        <KambistaSelector
          placeholder="Cuentas bancarias"
          items={SELECTOR_ITEMS.accounts}
          containerStyle={"pl-8 pr-8"}
        />
        <BankAccount />
      </View>
      <AddAccountIcon />
      <FooterMenu />
    </KambistaBackground>
  );
}
