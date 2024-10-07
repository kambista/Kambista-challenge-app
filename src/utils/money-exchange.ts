export function calcularCantidadRecibida(
  monto: number,
  tipoCambioVenta: number
) {
  if (tipoCambioVenta > 0) {
    return monto / tipoCambioVenta;
  } else {
    throw new Error("El tipo de cambio debe ser mayor que 0");
  }
}
export function calcularAhorroEstimado(
  monto: number,
  tipoCambioVenta: number,
  tipoCambioReferencial: number
) {
  if (tipoCambioVenta > 0 && tipoCambioReferencial > 0) {
    const ahorroEstimado =
      (1 / tipoCambioReferencial - 1 / tipoCambioVenta) * monto;
    return ahorroEstimado;
  } else {
    throw new Error("Los tipos de cambio deben ser mayores que 0");
  }
}
