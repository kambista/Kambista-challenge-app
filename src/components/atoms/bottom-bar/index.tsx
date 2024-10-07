import Home from "./../../../../assets/images/bottom-bar/home.svg";
import Accounts from "./../../../../assets/images/bottom-bar/accounts.svg";
import Notifications from "./../../../../assets/images/bottom-bar/notification.svg";
import Operations from "./../../../../assets/images/bottom-bar/operations.svg";
import Profile from "./../../../../assets/images/bottom-bar/profile.svg";
import { Pressable, Text, View } from "react-native";
import { BottomBarStyleSheet } from "./styles";
export const BottomBar = () => {
  return (
    <View className="relative flex-row items-center bg-white justify-between px-6 border-t-2 py-4 border-t-[#CCCCCC] mt-4">
      <Pressable style={BottomBarStyleSheet.iconContainer}>
        <Home width={24} />
        <Text style={BottomBarStyleSheet.text}>{"Inicio"}</Text>
      </Pressable>
      <Pressable style={BottomBarStyleSheet.iconContainer}>
        <Operations width={24} />
        <Text style={BottomBarStyleSheet.text}>{"Operaciones"}</Text>
      </Pressable>
      <Pressable style={BottomBarStyleSheet.iconContainer}>
        <Accounts width={24} />
        <Text style={BottomBarStyleSheet.text}>{"Cuentas"}</Text>
      </Pressable>
      <Pressable style={BottomBarStyleSheet.iconContainer}>
        <Notifications width={18} />
        <Text style={BottomBarStyleSheet.text}>{"Notificaciones"}</Text>
      </Pressable>
      <Pressable style={BottomBarStyleSheet.iconContainer}>
        <Profile width={18} />
        <Text style={BottomBarStyleSheet.text}>{"Perfil"}</Text>
      </Pressable>
    </View>
  );
};
