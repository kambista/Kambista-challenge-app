import { RegisterFormErrosProps, RegisterFormProps } from "./interface";

export const RegisterFormDefault: RegisterFormProps = {
  documentNumber: "",
  documentType: {
    label: "",
    value: "",
  },
  fullName: "",
  phone: "",
  policy: false,
  terms: false,
  moneychanger: {
    label: "",
    value: "",
  },
};
export const RegisterFormErrorsDefault: RegisterFormErrosProps = {
  documentNumber: "",
  documentType: "",
  fullName: "",
  phone: "",
  policy: "",
  terms: "",
  moneychanger: "",
};
