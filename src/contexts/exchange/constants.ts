import { ExchangeContextProps } from "./interface";

export const ExchangeContextDefault: ExchangeContextProps = {
  form: {
    accounts: { label: "", value: "" },
    bank: { label: "", value: "" },
    originFounds: { label: "", value: "" },
    buyValue: "",
    sellValue: "",
    accountSelected: { label: "", value: "" },
    isDollarToSole: false,
    currency: "",
  },
  setForm: (v) => {},
};

export const stepsDefault = [
  { title: "Completa", className: "text-sm" },
  { title: "Transfiere", className: "text-sm" },
  { title: "Constancia", className: "text-sm" },
];
