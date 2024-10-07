import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./screen/home/home.page";
import HomeCuentasPage from "./screen/home-cuentas/home-cuentas.page";
import { TransferenciaProvider } from "./context/transferencia.context";
import HomePayment1Page from "./screen/home-payment-1/home-payment-1.page";

const Stack = createNativeStackNavigator();

export default function HomeLayout() {
	return (
		<TransferenciaProvider>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="home"
			>
				<Stack.Screen name="home" component={HomePage} />
				<Stack.Screen name="home/cuentas" component={HomeCuentasPage} />
				<Stack.Screen name="home/payment-1" component={HomePayment1Page} />
			</Stack.Navigator>
		</TransferenciaProvider>
	);
}
