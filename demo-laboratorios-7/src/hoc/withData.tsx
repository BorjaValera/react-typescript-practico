import { useEffect, useState, type ComponentType } from 'react'
import type { Usuario } from '../components/InfoUsuario'

export function withData<P extends object>(
  Wrapped: ComponentType<P & { data: Usuario | null }>,
  url: string
) {
  return function WithData(props: P) {
    const [data, setData] = useState<Usuario | null>(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
      let cancelado = false

      async function cargar() {
        try {
          const res = await fetch(url)
          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          const json: Usuario = await res.json()
          if (!cancelado) setData(json)
        } catch {
          if (!cancelado) setData(null)
        } finally {
          if (!cancelado) setCargando(false)
        }
      }

      cargar()
      return () => {
        cancelado = true
      }
    }, [])

    if (cargando) return <p>Cargando datos…</p>
    return <Wrapped {...props} data={data} />
  }
}
