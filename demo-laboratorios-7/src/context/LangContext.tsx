import { createContext, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'en'

export type Traducciones = {
  bienvenida: string
  despedida: string
}

const traducciones: Record<Lang, Traducciones> = {
  es: {
    bienvenida: 'Bienvenido a la aplicación',
    despedida: 'Hasta pronto',
  },
  en: {
    bienvenida: 'Welcome to the app',
    despedida: 'See you soon',
  },
}

export const LangContext = createContext<Traducciones | null>(null)

type LangProviderProps = {
  children: ReactNode
}

export function LangProvider({ children }: LangProviderProps) {
  const [lang, setLang] = useState<Lang>('es')
  const value = traducciones[lang]

  return (
    <LangContext.Provider value={value}>
      <div style={{ padding: '1rem' }}>
        <label>
          Idioma:{' '}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </label>
        {children}
      </div>
    </LangContext.Provider>
  )
}
