import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./home.page";

const Stack = createNativeStackNavigator();

export default function HomeLayout() {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="home"
		>
			<Stack.Screen name="home" component={HomePage} />
		</Stack.Navigator>
	);
}
