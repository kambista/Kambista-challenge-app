import Octicons from "@expo/vector-icons/Octicons";
import { clsx } from "clsx";
import { ReactNode, useEffect, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";

interface Props {
	label?: string;
	value: boolean;
	labelRender?: ReactNode;
	classNameContainer?: string;
	onPress?: (values: boolean) => void;
}

export const CheckboxComponent = ({
	value,
	label,
	labelRender,
	classNameContainer,
	onPress,
}: Props) => {
	const [checked, setChecked] = useState<boolean>(false);

	useEffect(() => {
		setChecked(value);
	}, []);

	const handleChecked = () => {
		const state = !checked;

		setChecked(state);

		onPress && onPress(state);
	};

	const classCheck = clsx({
		"bg-text-700": checked,
		"bg-white border-2 border-text-700": !checked,
	});

	return (
		<Pressable
			onPress={handleChecked}
			className={twMerge("flex-row items-center", classNameContainer)}
		>
			<View
				className={twMerge(
					"h-5 w-5 items-center justify-center rounded-[3px]",
					classCheck
				)}
			>
				<Octicons name="check" size={20} color="white" />
			</View>
			{label ? (
				<Text className="ml-3 text-xs font-monserrat300 leading-[15px] flex-1">
					{label}
				</Text>
			) : (
				labelRender
			)}
		</Pressable>
	);
};
