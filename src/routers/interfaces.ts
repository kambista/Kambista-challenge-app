import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SelectItemProps } from "../components/molecules/select/interface";

/* Exchange Router */
export type ExchangeStackParamList = {
  "exchange-amount": undefined;
  "exchange-data": { value: SelectItemProps };
  "exchange-resumen": undefined;
  "sent-constancy-code": undefined;
  "sent-constancy": undefined;
};
export type ExchangeNavigationProp =
  NativeStackNavigationProp<ExchangeStackParamList>;
export type ExchangeRouteProp<RouteName extends keyof ExchangeStackParamList> =
  RouteProp<ExchangeStackParamList, RouteName>;

/* Root Router */
export type RootStackParamList = {
  exchange: undefined;
  accounts: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type RoutePropType<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
