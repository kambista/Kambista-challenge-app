import * as Yup from "yup";

export const initialValuesRegisterFormik = {
	name: "",
	typeDocument: 0,
	numDocument: "",
	phone: "",
	otherCompany: 0,
	terminos: false,
	politica: false,
};

export const validateSchemaRegisterFormik = Yup.object().shape({
	name: Yup.string().required("El campo es requerido"),
	typeDocument: Yup.number().moreThan(0, "El campo es requerido"),
	numDocument: Yup.string().required("El campo es requerido"),
	phone: Yup.string()
		.required("El campo es requerido")
		.min(9, "No es un valor correcto")
		.max(9, "No es un valor correcto"),
	otherCompany: Yup.number().moreThan(0, "El campo es requerido"),
	terminos: Yup.boolean().oneOf([true], "Debes aceptar los terminos"),
	politica: Yup.boolean().oneOf([true], "Debes aceptar los terminos"),
});
