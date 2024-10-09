import { Text, View } from "react-native";
import { TitleComponent } from "../../../components/general";

export const FormTitleComponent = () => {
	return (
		<View className="px-[33px] pt-[34] pb-[38px]">
			<TitleComponent text="¡Empecemos!" classNameContainer="mb-6" />

			<Text className="text-center text-base font-monserrat300 text-black leading-[16px]">
				Completa tus datos como figuran en tu DNI
			</Text>
		</View>
	);
};
