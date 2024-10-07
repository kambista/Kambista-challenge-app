import { View } from "react-native";
import { Text } from "react-native-paper";
import { RegisterFormHeaderStyleSheet } from "./styles";

const RegisterFormHeader = () => {
  return (
    <View>
      <View className="w-full items-center mt-6 mb-3">
        <Text style={RegisterFormHeaderStyleSheet.title}>{"¡Empecemos!"}</Text>
      </View>
      <View className="w-full items-center mt-3 mb-6 max-w-72 mx-auto">
        <Text style={RegisterFormHeaderStyleSheet.subtitle}>
          {"Completa tus datos como figuran en tu DNI"}
        </Text>
      </View>
    </View>
  );
};
export default RegisterFormHeader;
