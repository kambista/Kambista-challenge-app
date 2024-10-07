import { SelectItemProps } from "../../components/molecules/select/interface";

export interface RegisterAccountsFormProps {
  accountType: SelectItemProps;
  bank: SelectItemProps;
  moneyType: string;
  accountNumber: string;
  accountName: string;
  declaration: boolean;
}
export interface RegisterAccountsErrorProps {
  accountType: string;
  bank: string;
  moneyType: string;
  accountNumber: string;
  accountName: string;
  declaration: string;
}
