import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";
import { useNavigationState } from "@react-navigation/native";

const data = [
	{
		id: 1,
		name: "Completa",
		active: true,
	},
	{
		id: 2,
		name: "Transfiere",
		active: false,
	},
	{
		id: 3,
		name: "Constancia",
		active: false,
	},
];

export const LineNavegacionComponent = () => {
	const navigationState = useNavigationState((state) => state);
	const [active, setActive] = useState<number>(1);

	useEffect(() => {
		if (
			navigationState.routes[navigationState.index].name === "home/payment-1"
		) {
			setActive(1);
		} else if (
			navigationState.routes[navigationState.index].name === "home/payment-2"
		) {
			setActive(2);
		} else if (
			navigationState.routes[navigationState.index].name === "home/payment-3"
		) {
			setActive(3);
		}
	}, [navigationState.routes[navigationState.index].name]);

	return (
		<View className="px-4 pb-4 pt-6 bg-white">
			<View className="flex-row items-center justify-around mt-1">
				{data.map((el, index) => (
					<View key={el.id} className="relative w-1/3 items-center">
						<View
							className={twMerge(
								"absolute rounded-full -top-[12px] z-10 h-2 w-2",
								active >= el.id ? "bg-text-700" : "bg-[#ccc]"
							)}
						/>
						<View
							className={twMerge(
								"absolute h-[2px]  -top-[9px] left-1/2",
								index === data.length - 1 ? "" : "-right-1/2",
								active > index + 1 ? "bg-text-700" : "bg-[#ccc]"
							)}
						/>
						<Text
							className={twMerge(
								"font-monserrat700 text-[10px] leading-[12px]",
								active >= el.id ? "text-text-700" : "text-[#666666]"
							)}
						>
							{el.name}
						</Text>
					</View>
				))}
			</View>
		</View>
	);
};
