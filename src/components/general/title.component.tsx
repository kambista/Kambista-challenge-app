import { Text } from "react-native";
import { twMerge } from "tailwind-merge";

interface Props {
	text: string;
	classNameContainer?: string;
}

export const TitleComponent = ({ text, classNameContainer }: Props) => {
	return (
		<Text
			className={twMerge(
				"text-center font-monserrat700 text-2xl text-text-700",
				classNameContainer
			)}
		>
			{text}
		</Text>
	);
};
