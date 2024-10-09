import KambistaBackground from "../components/KambistaBackground";
import FooterMenu from "../components/FooterMenu/FooterMenu";
import KambistaSelector from "../components/KambistaSelector";
import { SELECTOR_ITEMS } from "../util/constants";
import ScreenTitle from "../components/ScreenTitle";
import AddAccountIcon from "../components/Accounts/AddAccountIcon";

export default function Accounts() {
  return (
    <KambistaBackground backButtons>
      <ScreenTitle title="Cuentas" textStyle="mb-9" />
      <KambistaSelector
        placeholder="Cuentas bancarias"
        items={SELECTOR_ITEMS.accounts}
        containerStyle={"pl-8 pr-8 flex-1"}
      />
      <AddAccountIcon />
      <FooterMenu />
    </KambistaBackground>
  );
}
