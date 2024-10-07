import { View } from "react-native";
import RegisterForm from "../../organisms/register-form";
import { AppHeader } from "../../atoms/header";

const RegisterPage = () => {
  return (
    <View className="flex-1 bg-white">
      <AppHeader goBack close logo />
      <View className="flex-1 px-6 pb-6">
        <RegisterForm />
      </View>
    </View>
  );
};
export default RegisterPage;
