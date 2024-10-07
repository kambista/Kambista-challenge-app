import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./screen/home/home.page";
import { TransferenciaProvider } from "./context/transferencia.context";
import { HomePayment3Page } from "./screen/home-payment-3/home-payment-3.page";
import { HomePayment1Page } from "./screen/home-payment-1/home-payment-1.page";
import { HomePayment2Page } from "./screen/home-payment-2/home-payment-2.page";
import { HomeCuentasPage } from "./screen/home-cuentas/home-cuentas.page";
import { HomeAddCuentaPage } from "./screen/home-add-cuenta/home-add-cuenta.page";
import { HomeResumenPage } from "./screen/home-resumen/home-resumen.page";
import { RootStackParamList } from "@/src/interface/router.interface";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeLayout() {
	return (
		<TransferenciaProvider>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="home"
			>
				<Stack.Screen name="home" component={HomePage} />
				<Stack.Screen name="home/cuentas" component={HomeCuentasPage} />
				<Stack.Screen name="home/add-cuenta" component={HomeAddCuentaPage} />
				<Stack.Screen name="home/payment-1" component={HomePayment1Page} />
				<Stack.Screen name="home/payment-2" component={HomePayment2Page} />
				<Stack.Screen name="home/payment-3" component={HomePayment3Page} />
				<Stack.Screen name="home/resumen" component={HomeResumenPage} />
			</Stack.Navigator>
		</TransferenciaProvider>
	);
}
