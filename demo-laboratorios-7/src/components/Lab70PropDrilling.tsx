import { useState } from 'react'
import { LayoutIntermedio } from './LayoutIntermedio'

/** Lab 7.0 — prop drilling (aislado del resto de providers). */
export function Lab70PropDrilling() {
  const [total, setTotal] = useState(0)
  const incrementar = () => setTotal((t) => t + 1)

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
      <p style={{ marginTop: 0 }}>
        Total mostrado en la «raíz» de esta sección: <strong>{total}</strong>
      </p>
      <LayoutIntermedio
        mensaje={`Clicks: ${total}`}
        onAccion={incrementar}
      />
    </div>
  )
}
