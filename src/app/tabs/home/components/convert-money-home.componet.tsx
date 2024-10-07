import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";
import { ButtonChangeMoneyComponent } from "./button-change-money.component";
import { useFormik } from "formik";

// import {
// 	useAuthContext,
// 	useTransferenciaContext,
// } from "@/shared/hooks/context.hook";
import { ItemMoneyComponent } from "./item-money.component";
import { ButtonComponent } from "../../../../components/form";
import { TextResumenComponent } from "./text-resumen.component";
import { ItemTabsOperationComponent } from "./item-tabs-operation.component";
import { DataResultCalculeProps } from "../interface/home.interface";
import { dataTypeSale } from "../contanst/data-home";
import { useNavigation } from "@react-navigation/native";
import { homeService } from "../service/home.service";

export const ConvertMoneyHomeComponent = () => {
	const navigation = useNavigation();
	const [typeSale, setTypeSale] = useState<number>(1);
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
	const [dataResult, setDataResult] = useState<DataResultCalculeProps | null>(
		null
	);
	// const { handleSaveTransferencia } = useTransferenciaContext();
	// const { user } = useAuthContext();

	const { values, setFieldValue, setValues } = useFormik({
		initialValues: {
			origin: {
				value: "1000",
				keyCurrency: "USD",
				currency: "Dólares",
			},
			destiny: {
				value: "",
				keyCurrency: "PEN",
				currency: "Soles",
			},
		},
		onSubmit: () => console.log(),
	});

	const handleNavigate = () => {
		const parameter = {
			origen: {
				value: Number(values.origin.value).toFixed(2),
				nameCurrency: values.origin.currency,
				typeCurrency: values.origin.keyCurrency === "USD" ? "$" : "S/",
			},
			destiny: {
				value: Number(values.destiny.value).toFixed(2),
				nameCurrency: values.destiny.currency,
				typeCurrency: values.destiny.keyCurrency === "USD" ? "$" : "S/",
			},
			rate: dataResult?.rate || 0,
		};

		// handleSaveTransferencia(parameter);

		// if (user) {
		// 	navigation.navigate({
		// 		pathname: "/(home)/cuentas",
		// 	});
		// } else {
		// 	navigation.navigate({
		// 		pathname: "/register",
		// 	});
		// }
	};

	const loadData = useCallback(async () => {
		const data = await handleCalculate(
			values.origin.value,
			values.origin.keyCurrency,
			values.destiny.keyCurrency
		);
		setDataResult(data);

		setFieldValue("destiny.value", data.exchange.toString());
	}, []);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const handlePress = (id: number) => {
		setTypeSale(id);
	};

	const handleChangeText = (value: string) => {
		if (timer) clearTimeout(timer);

		try {
			setFieldValue("origin.value", value);

			const newTimer = setTimeout(async () => {
				const data = await handleCalculate(
					value,
					values.origin.keyCurrency,
					values.destiny.keyCurrency
				);
				setDataResult(data);

				setFieldValue("destiny.value", data.exchange.toString());
			}, 300);

			setTimer(newTimer);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChangeMoney = async () => {
		try {
			const data = await handleCalculate(
				values.origin.value,
				values.destiny.keyCurrency,
				values.origin.keyCurrency
			);

			setValues({
				origin: {
					...values.origin,
					keyCurrency: values.destiny.keyCurrency,
					currency: values.destiny.currency,
				},
				destiny: {
					value: data.exchange.toString(),
					keyCurrency: values.origin.keyCurrency,
					currency: values.origin.currency,
				},
			});

			setDataResult(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCalculate = async (
		amount: string,
		originCurrency: string,
		destinationCurrency: string
	) => {
		const { rpta, error } = await homeService.calculateConvert({
			amount,
			originCurrency,
			destinationCurrency,
		});

		if (error) console.log(error);

		if (rpta?.status === 200) {
			return rpta.data;
		}
	};

	return (
		<>
			<View className="flex-row mt-[50px]">
				{dataTypeSale.map((el) => (
					<ItemTabsOperationComponent
						item={el}
						onPress={handlePress}
						typeSale={typeSale}
						key={el.id}
					/>
				))}
			</View>

			<View className="w-full bg-white border-t border-gray-300 py-5 px-4 rounded-b-md">
				<View className="relative">
					<ItemMoneyComponent
						classNameContainer={twMerge("mb-2.5")}
						value={values.origin.value}
						nameCurrency={values.origin.currency}
						onChangeText={handleChangeText}
						title="¿Cuánto envías?"
					/>
					<ItemMoneyComponent
						value={values.destiny.value}
						nameCurrency={values.destiny.currency}
						title="Entonces recibes"
						readOnly
					/>
					<ButtonChangeMoneyComponent onPress={handleChangeMoney} />
				</View>

				{dataResult ? (
					<TextResumenComponent
						amount={dataResult.savings.amount}
						currency={dataResult.savings.currency}
						rate={dataResult.rate}
					/>
				) : null}
			</View>

			<ButtonComponent
				name="INICIAR OPERACIÓN"
				onPress={handleNavigate}
				classNameContainer="mt-6"
			/>
		</>
	);
};
