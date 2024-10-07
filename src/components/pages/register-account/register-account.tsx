import { View } from "react-native";
import { BottomBar } from "../../atoms/bottom-bar";

import { AppHeader } from "../../atoms/header";
import RegisterAccountForm from "../../organisms/register-account-form";

const RegisterAccountPage = () => {
  return (
    <View className=" flex-1 bg-white">
      <AppHeader goBack close logo />
      <View className="flex-1 px-8 bg-white pb-6">
        <RegisterAccountForm />
      </View>
    </View>
  );
};
export default RegisterAccountPage;
