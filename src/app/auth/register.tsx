import { ScrollView, View } from "react-native";
import { HeaderComponent } from "../../components/layout/header.component";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FormRegisterComponent } from "./components/form-register.component";
import { FormTitleComponent } from "./components/title-register.component";

export const RegisterPage = () => {
	const inset = useSafeAreaInsets();
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View
				className="bg-white flex-1"
				style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
			>
				{/* Header */}
				<HeaderComponent />

				<View className="">
					{/* Title */}

					<FormTitleComponent />

					{/* Formulario */}

					<FormRegisterComponent />
				</View>
			</View>
		</ScrollView>
	);
};
