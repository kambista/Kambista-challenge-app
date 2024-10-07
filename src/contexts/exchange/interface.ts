import { SelectItemProps } from "../../components/molecules/select/interface";

export interface ExchangeDataFormProps {
  buyValue: string;
  sellValue: string;
  originFounds: SelectItemProps;
  accounts: SelectItemProps;
  bank: SelectItemProps;
  accountSelected: SelectItemProps;
  isDollarToSole: boolean;
  currency: string;
}
export interface ExchangeContextProps {
  form: ExchangeDataFormProps;
  setForm: (v: ExchangeDataFormProps) => void;
}
