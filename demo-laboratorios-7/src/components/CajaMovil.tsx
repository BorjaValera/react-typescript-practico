import { useEffect, useReducer } from 'react'
import {
  cajaReducer,
  posicionInicial,
  TAMANO_CAJA,
} from '../reducers/cajaReducer'

export function CajaMovil() {
  const [pos, dispatch] = useReducer(cajaReducer, null, posicionInicial)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      dispatch({ type: 'tecla', key: e.key })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div
      style={{
        width: TAMANO_CAJA,
        height: TAMANO_CAJA,
        backgroundColor: 'crimson',
        position: 'fixed',
        left: pos.x,
        top: pos.y,
      }}
      tabIndex={0}
      aria-label="Caja movible con flechas"
    />
  )
}
