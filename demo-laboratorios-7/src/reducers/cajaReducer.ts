const PASO = 10
const TAMANO = 50

export type Posicion = { x: number; y: number }

export type AccionCaja = { type: 'tecla'; key: string }

export function posicionInicial(): Posicion {
  return {
    x: Math.max(0, Math.floor(window.innerWidth / 2 - TAMANO / 2)),
    y: Math.max(0, Math.floor(window.innerHeight / 2 - TAMANO / 2)),
  }
}

export function cajaReducer(estado: Posicion, accion: AccionCaja): Posicion {
  switch (accion.key) {
    case 'ArrowLeft':
      return { ...estado, x: Math.max(0, estado.x - PASO) }
    case 'ArrowRight':
      return { ...estado, x: estado.x + PASO }
    case 'ArrowUp':
      return { ...estado, y: Math.max(0, estado.y - PASO) }
    case 'ArrowDown':
      return { ...estado, y: estado.y + PASO }
    default:
      return estado
  }
}

export const TAMANO_CAJA = TAMANO
