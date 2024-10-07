import React, { useState } from "react";

interface TransferenciaContextProps {
	transferenciaMoney: TransferenciaMoneyContextProps | null;
	handleSaveTransferencia: (parameter: TransferenciaMoneyContextProps) => void;
}

interface TransferenciaMoneyContextProps {
	origen: {
		value: string;
		nameCurrency: string;
		typeCurrency: string;
	};
	destiny: {
		value: string;
		nameCurrency: string;
		typeCurrency: string;
	};
	rate: number;
}

const initialValuesContext = {
	transferenciaMoney: null,
	handleSaveTransferencia: () => {},
};

export const TransferenciaContext =
	React.createContext<TransferenciaContextProps>(initialValuesContext);

export const TransferenciaProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [transferenciaMoney, setTransferenciaMoney] =
		useState<TransferenciaMoneyContextProps | null>(null);

	const handleSaveTransferencia = (
		parameter: TransferenciaMoneyContextProps
	) => {
		setTransferenciaMoney(parameter);
	};

	const value: TransferenciaContextProps = {
		transferenciaMoney,
		handleSaveTransferencia,
	};

	return (
		<TransferenciaContext.Provider value={value}>
			{children}
		</TransferenciaContext.Provider>
	);
};
