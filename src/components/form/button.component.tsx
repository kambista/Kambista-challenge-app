import clsx from "clsx";
import { Pressable, Text } from "react-native";
import { twMerge } from "tailwind-merge";

interface Props {
	name: string;
	loading?: boolean;
	onPress: () => void;
	classNameContainer?: string;
	disabled?: boolean;
}

export const ButtonComponent = ({
	name,
	loading,
	onPress,
	classNameContainer,
	disabled,
}: Props) => {
	const buttonClass = clsx({
		"opacity-50": disabled,
	});

	return (
		<Pressable
			onPress={onPress}
			className={twMerge(
				"bg-primary-700 rounded-md py-[18px] items-center justify-center",
				buttonClass,
				classNameContainer
			)}
			disabled={disabled}
		>
			{
				<Text className="text-text-700 text-sm font-monserrat600 leading-[17px] uppercase">
					{loading ? "Cargando ..." : name}
				</Text>
			}
		</Pressable>
	);
};
