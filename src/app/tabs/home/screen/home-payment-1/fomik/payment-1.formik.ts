import * as Yup from "yup";

export const initialValuesPayment1Formik = {
	idBanco: 0,
	idCuenta: 0,
	idFondo: 0,
};

export const validateSchemaPayement1Formik = Yup.object().shape({
	idBanco: Yup.number().moreThan(0, "El campo es requerido"),
	idCuenta: Yup.number().moreThan(0, "El campo es requerido"),
	idFondo: Yup.number().moreThan(0, "El campo es requerido"),
});
