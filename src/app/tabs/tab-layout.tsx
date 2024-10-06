import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "./home/home.page";
import HomeLayout from "./home/home-layout";

const Tab = createBottomTabNavigator();

export const TabsLayout = () => {
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="home-layout"
		>
			<Tab.Screen name="home-layout" component={HomeLayout} />
		</Tab.Navigator>
	);
};
