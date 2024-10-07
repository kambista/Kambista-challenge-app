import { useState } from "react";
import { RegisterFormDefault, RegisterFormErrorsDefault } from "./constants";
import { RegisterFormErrosProps, RegisterFormProps } from "./interface";
import { isValidDNI, isValidPhone } from "../../utils/regex";
import { UseAuthContext } from "../../contexts/auth/auth-hook";

export const UseRegister = () => {
  const [isValid, setIsValid] = useState(false);
  const [form, setForm] = useState<RegisterFormProps>(RegisterFormDefault);
  const [errors, setErrors] = useState<RegisterFormErrosProps>(
    RegisterFormErrorsDefault
  );
  const { setProfile, getProfile } = UseAuthContext();

  const validateFields = () => {
    let _isValid = true;
    let _errors: RegisterFormErrosProps = { ...RegisterFormErrorsDefault };
    if (!form.fullName) {
      _errors.fullName = "Ingresa tu nombre y apellidos";
      _isValid = false;
    }
    if (!form?.documentType?.value) {
      _errors.documentType = "Selecciona tu documento";
      _isValid = false;
    }
    if (!form.documentNumber) {
      _errors.documentNumber = "Ingresa tu número de documento";
      _isValid = false;
    }
    if (!isValidDNI(form.documentNumber)) {
      _errors.documentNumber = "Ingresa un documento valido";
      _isValid = false;
    }
    if (!form.phone) {
      _errors.phone = "Ingresa tu número de telefono.";
      _isValid = false;
    }
    if (!isValidPhone(form.phone)) {
      _errors.phone = "Ingresa un número de telefono valido.";
      _isValid = false;
    }
    if (!form.policy) {
      _errors.policy = "Debes aceptar la política de tratamiento de datos";
      _isValid = false;
    }
    if (!form.terms) {
      _errors.terms = "Debes aceptar los términos y condiciones";
      _isValid = false;
    }
    setErrors(_errors);
    setIsValid(_isValid);
    return { _isValid, _errors };
  };
  const submit = () => {
    const { _isValid } = validateFields();
    if (!_isValid) {
      return;
    }
    /* Simulacion de creacion de cuenta */
    setProfile(form);
    getProfile();
  };
  return { form, setForm, errors, setErrors, submit, isValid };
};
