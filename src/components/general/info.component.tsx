import { View } from "react-native";
import { twMerge } from "tailwind-merge";

interface Props {
	children: React.ReactNode;
	classNameContainer?: string;
}

export const InfoComponent = ({ children, classNameContainer }: Props) => {
	return (
		<View
			className={twMerge(
				"rounded-xl py-2.5 px-3 bg-[#E8F3FEBF] shadow-lg",
				classNameContainer
			)}
		>
			{children}
		</View>
	);
};
