import { View } from "react-native";
import { twMerge } from "tailwind-merge";

interface Props {
	children?: React.ReactNode;
	classNameContainer?: string;
}

export const CardComponent = ({ children, classNameContainer }: Props) => {
	return (
		<View
			className={twMerge(
				"bg-white rounded-lg px-5 py-5 border border-[#E0E4EB]",
				classNameContainer
			)}
		>
			{children}
		</View>
	);
};
