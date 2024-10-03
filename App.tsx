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
    return null; // Pantalla en blanco mientras se carga la fuente
  }

  return (
    <NavigationContainer theme={navTheme}>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-kambista-blue">
          <Stack.Navigator
            screenOptions={{ headerShown: false, animation: "fade" }}
            initialRouteName="Login"
          >
            <Stack.Screen name="Login">{() => <Login />}</Stack.Screen>
            <Stack.Screen name="CurrencyExchange">
              {() => <CurrencyExchange />}
            </Stack.Screen>
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
