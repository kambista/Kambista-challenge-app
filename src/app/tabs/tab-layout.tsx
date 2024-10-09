import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeLayout from "./home/home-layout";
import IconInicio from "../../constants/images/icon-inicio";
import IconCuentas from "../../constants/images/icon-cuentas";
import IconOperacions from "../../constants/images/icon-operaciones";
import IconNotificaciones from "../../constants/images/icon-notificaciones";
import IconPerfil from "../../constants/images/icon-perfil";
import { OperacionesPage } from "./operaciones/operaciones.page";
import { PerfilPage } from "./perfil/perfil.page";
import { NotificacionesPage } from "./notificaciones/notificaciones.page";
import { CuentasPage } from "./cuentas/cuentas.page";

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
					fontWeight: "400",
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
				component={OperacionesPage}
			/>
			<Tab.Screen
				name="cuentas"
				options={{
					title: "Cuentas",
					tabBarIcon: () => <IconCuentas />,
				}}
				component={CuentasPage}
			/>
			<Tab.Screen
				name="notificaciones"
				options={{
					title: "Notificaciones",
					tabBarIcon: () => <IconNotificaciones />,
				}}
				component={NotificacionesPage}
			/>
			<Tab.Screen
				name="perfil"
				options={{
					title: "Perfil",
					tabBarIcon: () => <IconPerfil />,
				}}
				component={PerfilPage}
			/>
		</Tab.Navigator>
	);
};
