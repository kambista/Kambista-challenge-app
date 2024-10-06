import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RegisterPage } from "./app/auth/register";
import { TabsLayout } from "./app/tabs/tab-layout";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="tabs"
			>
				<Stack.Screen name="register" component={RegisterPage} />
				<Stack.Screen name="tabs" component={TabsLayout} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
