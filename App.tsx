import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import CurrencyExchange from "./screens/CurrencyExchange";
import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Accounts from "./screens/Accounts";
import AddAccount from "./screens/AddAccount";
import DataExchange from "./screens/DataExchange";
import KambistaExchange from "./screens/KambistaExchange";
import Voucher from "./screens/Voucher";
import VoucherSent from "./screens/VoucherSent";

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
    primary: "#333", // add a primary color
    card: "#fff", // add a card color
    text: "#333", // add a text color
    border: "#ddd", // add a border color
    notification: "#f00", // add a notification color
  },
  dark: false,
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={navTheme}>
      <SafeAreaProvider>
        <SafeAreaView className="h-full bg-kambista-blue">
          <Stack.Navigator
            screenOptions={{ headerShown: false, animation: "fade" }}
            initialRouteName="VoucherSent"
          >
            <Stack.Screen name="Login">{() => <Login />}</Stack.Screen>
            <Stack.Screen name="CurrencyExchange">
              {() => <CurrencyExchange />}
            </Stack.Screen>
            <Stack.Screen name="Accounts">{() => <Accounts />}</Stack.Screen>
            <Stack.Screen name="AddAccount">
              {() => <AddAccount />}
            </Stack.Screen>
            <Stack.Screen name="DataExchange">
              {() => <DataExchange />}
            </Stack.Screen>
            <Stack.Screen name="KambistaExchange">
              {() => <KambistaExchange />}
            </Stack.Screen>
            <Stack.Screen name="Voucher">{() => <Voucher />}</Stack.Screen>
            <Stack.Screen name="VoucherSent">
              {() => <VoucherSent />}
            </Stack.Screen>
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
