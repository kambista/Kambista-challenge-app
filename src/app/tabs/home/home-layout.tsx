import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./screen/home/home.page";
import HomeCuentasPage from "./screen/home-cuentas/home-cuentas.page";

const Stack = createNativeStackNavigator();

export default function HomeLayout() {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="home"
		>
			<Stack.Screen name="home" component={HomePage} />
			<Stack.Screen name="home/cuentas" component={HomeCuentasPage} />
		</Stack.Navigator>
	);
}
