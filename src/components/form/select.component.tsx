import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { twMerge } from "tailwind-merge";

interface ItemSelectProps {
	id: number;
	name: string;
}

interface Props {
	data: ItemSelectProps[];
	placeholder?: string;
	maxHeight?: number;
	value: ItemSelectProps | number | any;
	onChange: (value: ItemSelectProps) => void;
	label?: string;
	classNameContainer?: string;
	error?: string;
	touched?: boolean;
}

export const SelectComponent = ({
	data = [],
	onChange,
	value,
	maxHeight = 300,
	placeholder = "Seleccionar",
	label,
	classNameContainer,
	error,
	touched,
}: Props) => {
	return (
		<View className={twMerge("w-full", classNameContainer)}>
			{label ? (
				<Text className="mb-2 text-sm text-gray-600 font-semibold leading-[16px]">
					{label}
				</Text>
			) : null}
			<Dropdown
				style={styles.dropdown}
				placeholderStyle={styles.placeholderStyle}
				selectedTextStyle={styles.selectedTextStyle}
				data={data}
				maxHeight={maxHeight}
				labelField="name"
				valueField="id"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				renderItem={renderItem}
			/>

			{error && touched ? (
				<Text className="text-red-700 text-xs font-normal mt-1">{error}</Text>
			) : null}
		</View>
	);
};

const renderItem = (item: ItemSelectProps) => {
	return (
		<View style={styles.item}>
			<Text style={styles.textItem}>{item.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	dropdown: {
		height: 46,
		backgroundColor: "white",
		borderRadius: 10,
		paddingHorizontal: 16,
		borderWidth: 1,
		borderColor: "#CCCCCC",
	},
	item: {
		padding: 16,
	},
	textItem: {
		color: "#060F26",
		lineHeight: 14,
		fontSize: 14,
		fontWeight: "400",
	},
	placeholderStyle: {
		fontSize: 14,
		color: "#A7A7A7",
		fontWeight: "500",
	},
	selectedTextStyle: {
		color: "#060F26",
		lineHeight: 14,
		fontSize: 14,
		fontWeight: "500",
	},
});
