import {
	KeyboardTypeOptions,
	NativeSyntheticEvent,
	Text,
	TextInput,
	TextInputFocusEventData,
	View,
} from "react-native";
import { twMerge } from "tailwind-merge";

interface Props {
	label?: string;
	value: string;
	placeholder?: string;
	keyboardType?: KeyboardTypeOptions;
	onChangeText?: (value: string) => void;
	error?: string;
	touched?: boolean;
	readOnly?: boolean;
	classNameContainer?: string;
	onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

export const InputComponent = ({
	value,
	label,
	keyboardType = "default",
	error,
	touched,
	classNameContainer,
	...props
}: Props) => {
	return (
		<View className={twMerge("w-full", classNameContainer)}>
			<Text className="mb-2 text-sm text-gray-600 font-monserrat600 leading-[16px]">
				{label}
			</Text>

			<TextInput
				keyboardType={keyboardType}
				placeholderTextColor={"#A7A7A7"}
				className="h-[46px] px-4 border border-gray-300 rounded-[10px] text-text text-sm font-monserrat500 w-full bg-white"
				{...props}
			/>

			{error && touched ? (
				<Text className="text-red-700 text-xs font-monserrat400 mt-1">
					{error}
				</Text>
			) : null}
		</View>
	);
};
