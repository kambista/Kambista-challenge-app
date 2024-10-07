import { RegisterAccountsFormProps } from "../../hooks/useRegisterAccount/interface";

export interface UserContextProps {
  accounts: RegisterAccountsFormProps[];
  getAccounts: () => void;
  setAccounts: (data: RegisterAccountsFormProps) => void;
}
