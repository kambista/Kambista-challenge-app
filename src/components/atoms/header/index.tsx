import { Image, Pressable, View } from "react-native";
import Rectangle from "./../../../../assets/images/header/Rectangle.png";
import Union from "./../../../../assets/images/header/Union.png";
import VectorLeft from "./../../../../assets/images/header/Vector-1.png";
import VectorRight from "./../../../../assets/images/header/Vector.png";
import Icon from "./../../../../assets/images/header/Icon.png";
import Chevron from "./../../../../assets/images/header/Chevron.png";
import XCircle from "./../../../../assets/images/header/x-circle.png";
import { AppHeaderProps } from "./interface";
import { UseAuthContext } from "../../../contexts/auth/auth-hook";
import { useNavigation } from "@react-navigation/native";
export const AppHeader = ({ close, goBack, logo }: AppHeaderProps) => {
  const { logout } = UseAuthContext();
  const navigation = useNavigation();
  return (
    <View className="relative bg-white">
      <View className="absolute z-10 items-center justify-between flex-row w-full pl-4">
        {goBack && (
          <Pressable
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}
          >
            <Image source={Chevron} />
          </Pressable>
        )}
        {close && (
          <Pressable
            onPress={() => {
              logout();
            }}
          >
            <Image source={XCircle} />
          </Pressable>
        )}
      </View>
      <Image source={Rectangle} />
      <View className="flex justify-between flex-row relative mb-8">
        <Image source={VectorLeft} className="absolute left-0 -top-1" />

        <View className="absolute w-full items-center justify-center -top-6">
          {logo && <Image source={Icon} className="absolute z-50 -top-5" />}
          <Image source={Union} />
        </View>
        <Image source={VectorRight} className="absolute right-0 -top-1" />
      </View>
    </View>
  );
};
