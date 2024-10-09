import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RegisterPage } from "./src/app/auth/register";
import { TabsLayout } from "./src/app/tabs/tab-layout";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import { AuthProvider } from "./src/context/auth.context";

import {
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
	const [loaded] = useFonts({
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
		Montserrat_900Black,
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<AuthProvider>
			<StatusBar style="light" backgroundColor={"#060F26"} />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{ headerShown: false }}
					initialRouteName="tabs"
				>
					<Stack.Screen name="register" component={RegisterPage} />
					<Stack.Screen name="tabs" component={TabsLayout} />
				</Stack.Navigator>
			</NavigationContainer>
		</AuthProvider>
	);
}
