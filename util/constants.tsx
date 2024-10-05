export const TEXT_TYPES = {
  UNDERLINE: "underline",
  BOLD: "bold",
  REGULAR: "regular",
  SEMIBOLD: "semibold",
};

export const SELECTOR_ITEMS = {
  documentTypeItems: [
    { label: "DNI", value: "dni" },
    { label: "Carné Extranjería", value: "carne" },
    { label: "Pasaporte", value: "pasaporte" },
  ],
  otherExchangeCompanies: [
    { label: "TKambista", value: "tkambista" },
    { label: "Cambio Fácil", value: "CambioFacil" },
  ],
  accounts: [
    {
      label: "BCP",
      value: "bcp",
    },
    {
      label: "INTERBANK",
      value: "interbank",
    },
    {
      label: "SANTANDER",
      value: "santander",
    },
  ],
  accountTypes: [
    {
      label: "Cuenta Corriente",
      value: "CC",
    },
    {
      label: "Cuenta Ahorro",
      value: "CA",
    },
    {
      label: "Cuenta Soles",
      value: "CS",
    },
  ],
  banks: [
    {
      label: "BCP",
      value: "bcp",
    },
    {
      label: "INTERBANK",
      value: "interbank",
    },
    {
      label: "SANTANDER",
      value: "santander",
    },
  ],
  foundSource: [
    {
      label: "Hipoteca",
      value: "hipoteca",
    },
    {
      label: "Crédito",
      value: "credito",
    },
    {
      label: "Alquiler",
      value: "alquiler",
    },
  ],
};

export const TEXT_CONSTANTS = {
  TermsTexts: [
    {
      text: "He leído y acepto los ",
      textStyles: [TEXT_TYPES.REGULAR],
    },
    {
      text: "Términos y Condiciones",
      textStyles: [TEXT_TYPES.BOLD, TEXT_TYPES.UNDERLINE],
    },
  ],
  PoliticsTexts: [
    {
      text: "Acepto de manera expresa e informada la ",
      textStyles: [TEXT_TYPES.REGULAR],
    },
    {
      text: "Política de Tratamiento de Datos personales de Kambista",
      textStyles: [TEXT_TYPES.BOLD, TEXT_TYPES.UNDERLINE],
    },
  ],
  Statement: [
    {
      text: "Declaro que esta cuenta es mía.",
      textStyles: [TEXT_TYPES.REGULAR],
    },
  ],
};
