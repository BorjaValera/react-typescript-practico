import { useReducer } from 'react'
import {
  contadorReducer,
  estadoInicial,
  type AccionContador,
} from '../reducers/contadorReducer'

export function ContadorReducer() {
  const [estado, dispatch] = useReducer(contadorReducer, estadoInicial)

  const enviar = (accion: AccionContador) => () => dispatch(accion)

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <button type="button" onClick={enviar({ type: 'decrementar' })}>
        −1
      </button>
      <strong style={{ minWidth: '3rem', textAlign: 'center' }}>
        {estado.valor}
      </strong>
      <button type="button" onClick={enviar({ type: 'incrementar' })}>
        +1
      </button>
      <button type="button" onClick={enviar({ type: 'sumar', payload: 5 })}>
        +5
      </button>
      <button type="button" onClick={enviar({ type: 'reiniciar' })}>
        Reset
      </button>
    </div>
  )
}
