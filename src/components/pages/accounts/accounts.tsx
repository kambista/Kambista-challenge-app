import { Text, View } from "react-native";
import { AppHeader } from "../../atoms/header";
import { AccountList } from "../../organisms/accounts-list";
import { BottomBar } from "../../atoms/bottom-bar";

const AccountsPage = () => {
  return (
    <View className="bg-white flex-1">
      <AppHeader goBack close logo />
      <View className="flex-1">
        <AccountList />
      </View>
      <BottomBar />
    </View>
  );
};
export default AccountsPage;
