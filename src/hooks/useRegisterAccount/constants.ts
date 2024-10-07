import {
  RegisterAccountsErrorProps,
  RegisterAccountsFormProps,
} from "./interface";

export const RegisterAccountFormDefault: RegisterAccountsFormProps = {
  accountType: { label: "", value: "" },
  bank: { label: "", value: "" },
  moneyType: "soles",
  accountNumber: "",
  accountName: "",
  declaration: false,
};
export const RegisterAccountErrorsDefault: RegisterAccountsErrorProps = {
  accountType: "",
  bank: "",
  moneyType: "",
  accountNumber: "",
  accountName: "",
  declaration: "",
};