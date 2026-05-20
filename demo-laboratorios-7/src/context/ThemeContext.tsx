import {
  createContext,
  useContext,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

export type ModoTema = 'claro' | 'oscuro'

const estilosPorModo: Record<ModoTema, CSSProperties> = {
  claro: {
    backgroundColor: '#fff',
    color: '#111',
    minHeight: '120px',
    padding: '1rem',
  },
  oscuro: {
    backgroundColor: '#1a1a1a',
    color: '#f5f5f5',
    minHeight: '120px',
    padding: '1rem',
  },
}

type ThemeContextValue = {
  modo: ModoTema
  estilos: CSSProperties
  alternar: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [modo, setModo] = useState<ModoTema>('claro')

  const value: ThemeContextValue = {
    modo,
    estilos: estilosPorModo[modo],
    alternar: () => setModo((m) => (m === 'claro' ? 'oscuro' : 'claro')),
  }

  return (
    <ThemeContext.Provider value={value}>
      <div>
        <button
          type="button"
          onClick={value.alternar}
          style={{ margin: '0 1rem', marginTop: '1rem' }}
        >
          Tema: {modo} (clic para cambiar)
        </button>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider')
  return ctx
}
