export type EstadoContador = {
  valor: number
}

export type AccionContador =
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'reiniciar' }
  | { type: 'sumar'; payload: number }

export const estadoInicial: EstadoContador = { valor: 0 }

export function contadorReducer(
  estado: EstadoContador,
  accion: AccionContador
): EstadoContador {
  switch (accion.type) {
    case 'incrementar':
      return { valor: estado.valor + 1 }
    case 'decrementar':
      return { valor: estado.valor - 1 }
    case 'reiniciar':
      return { valor: 0 }
    case 'sumar':
      return { valor: estado.valor + accion.payload }
    default:
      return estado
  }
}
