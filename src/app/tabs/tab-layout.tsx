import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "./home/screen/home/home.page";
import HomeLayout from "./home/home-layout";
import IconInicio from "../../constants/images/icon-inicio";
import IconCuentas from "../../constants/images/icon-cuentas";
import IconOperacions from "../../constants/images/icon-operaciones";
import IconNotificaciones from "../../constants/images/icon-notificaciones";
import IconPerfil from "../../constants/images/icon-perfil";

const Tab = createBottomTabNavigator();

export const TabsLayout = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#060F26",
				headerShown: false,
				tabBarStyle: {
					height: 75,
					flexDirection: "column",
					justifyContent: "center",
				},
				tabBarLabelStyle: {
					fontFamily: "Montserrat_400Regular",
					position: "relative",
					top: -10,
					fontSize: 10,
				},
			}}
			initialRouteName="home-layout"
		>
			<Tab.Screen
				name="home-layout"
				options={{
					title: "Inicio",
					tabBarIcon: () => <IconInicio />,
				}}
				component={HomeLayout}
			/>
			<Tab.Screen
				name="operaciones"
				options={{
					title: "Operaciones",
					tabBarIcon: () => <IconOperacions />,
				}}
				component={HomeLayout}
			/>
			<Tab.Screen
				name="cuentas"
				options={{
					title: "Cuentas",
					tabBarIcon: () => <IconCuentas />,
				}}
				component={HomeLayout}
			/>
			<Tab.Screen
				name="notificaciones"
				options={{
					title: "Notificaciones",
					tabBarIcon: () => <IconNotificaciones />,
				}}
				component={HomeLayout}
			/>
			<Tab.Screen
				name="perfil"
				options={{
					title: "Perfil",
					tabBarIcon: () => <IconPerfil />,
				}}
				component={HomeLayout}
			/>
		</Tab.Navigator>
	);
};
