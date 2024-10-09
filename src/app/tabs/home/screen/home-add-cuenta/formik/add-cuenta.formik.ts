import * as Yup from "yup";

export const initialValuesAddCuentaFormik = {
	tipoCuenta: 0,
	banco: 0,
	typeCurrency: 1,
	numero_cuenta: "",
	alias_cuenta: "",
	isMyCuenta: false,
};

export const validateSchemaAddCuentaFormik = Yup.object().shape({
	tipoCuenta: Yup.number().moreThan(0, "El campo es requerido"),
	banco: Yup.number().moreThan(0, "El campo es requerido"),
	typeCurrency: Yup.number().moreThan(0, "El campo es requerido"),
	numero_cuenta: Yup.string().required("El campo es requerido"),
	alias_cuenta: Yup.string(),
	isMyCuenta: Yup.boolean(),
});
