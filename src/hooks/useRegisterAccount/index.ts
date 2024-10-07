import { useState } from "react";
import {
  RegisterAccountErrorsDefault,
  RegisterAccountFormDefault,
} from "./constants";
import {
  RegisterAccountsErrorProps,
  RegisterAccountsFormProps,
} from "./interface";
import { UseUserContext } from "../../contexts/user/user-hook";
import { useNavigation } from "@react-navigation/native";
import { isValidAccountNumber } from "../../utils/regex";

export const UseRegisterAccount = () => {
  const navigation = useNavigation();
  const { setAccounts } = UseUserContext();
  const [form, setForm] = useState<RegisterAccountsFormProps>(
    RegisterAccountFormDefault
  );
  const [errors, setErrors] = useState<RegisterAccountsErrorProps>(
    RegisterAccountErrorsDefault
  );
  const submit = () => {
    const { _isValid } = validateFields();
    if (!_isValid) {
      return;
    }
    /* Simulacion de registro de cuenta */
    setAccounts(form);
    navigation.goBack();
  };
  const validateFields = () => {
    let _isValid = true;
    let _errors: RegisterAccountsErrorProps = {
      ...RegisterAccountErrorsDefault,
    };
    if (!form.accountName) {
      _errors.accountName = "Ingresa el nombre de tu cuenta";
      _isValid = false;
    }
    if (!isValidAccountNumber(form.accountNumber)) {
      _errors.accountNumber = "Ingresa el numero de tu cuenta";
      _isValid = false;
    }
    if (!form.accountType) {
      _errors.accountType = "Ingresa el tipo de cuenta";
      _isValid = false;
    }
    if (!form.bank) {
      _errors.bank = "Ingresa el banco al que corresponde";
      _isValid = false;
    }
    if (!form.moneyType) {
      _errors.moneyType = "Ingresa el tipo de moneda";
      _isValid = false;
    }
    if (!form.declaration) {
      _errors.declaration = "Acepta la declaraion";
      _isValid = false;
    }
    setErrors(_errors);
    return { _isValid, _errors };
  };
  const handlerMoney = (value: string) => {
    setForm({ ...form, moneyType: value });
  };
  return { form, setForm, errors, setErrors, submit, handlerMoney };
};
