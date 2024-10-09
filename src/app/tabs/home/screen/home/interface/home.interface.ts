export interface DataTypeSaleProps {
	id: number;
	name: string;
	value: number;
}

export interface ItemSaleProps {
	id: number;
	text: string;
	value: string;
	nameMoney: string;
	keyMoney: string;
	direction: string;
}

export interface ItemChangeProps extends Omit<ItemSaleProps, "id" | "text"> {}

/* SERVICES */
export interface CalculateParameterProps {
	originCurrency: string;
	destinationCurrency: string;
	amount: string;
	active?: string;
}

export interface DataResultCalculeProps {
	rate: number;
	exchange: number;
	tc: {
		bid: number;
		ask: number;
	};

	savings: {
		amount: string;
		currency: string;
	};
}
