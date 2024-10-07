const phoneRegex = /^9\d{8}$/;
const dniRegex = /^\d{8}$/;
const constancyCodeRegex = /^\d{6}$/;
const accountNumberRegex = /^\d{10,14}$/;
export const isValidDNI = (value: string) => dniRegex.test(value);
export const isValidPhone = (value: string) => phoneRegex.test(value);
export const isValidConstancyCode = (value: string) =>
  constancyCodeRegex.test(value);
export const isValidAccountNumber = (value: string) =>
  accountNumberRegex.test(value);
