import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RegisterPage } from "./src/app/auth/register";
import { TabsLayout } from "./src/app/tabs/tab-layout";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// import { useEffect } from "react";
import { AuthProvider } from "./src/context/auth.context";
// import { ToastAndroid } from "react-native";

// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
	// const [loaded, error] = useFonts({
	// 	Montserrat_300Light: require("./assets/fonts/Montserrat-Light.ttf"),
	// 	Montserrat_400Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
	// 	Montserrat_500Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
	// 	Montserrat_600SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
	// 	Montserrat_700Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
	// 	Montserrat_900Black: require("./assets/fonts/Montserrat-Black.ttf"),
	// });

	// useEffect(() => {
	// 	if (loaded || error) {
	// 		SplashScreen.hideAsync();
	// 	}
	// }, [loaded, error]);

	// if (!loaded && !error) {
	// 	ToastAndroid.show(JSON.stringify(loaded), ToastAndroid.LONG);
	// 	ToastAndroid.show(JSON.stringify(error), ToastAndroid.LONG);
	// 	return null;
	// }

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
