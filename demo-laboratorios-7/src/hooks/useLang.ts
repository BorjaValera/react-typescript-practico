import { useContext } from 'react'
import { LangContext, type Traducciones } from '../context/LangContext'

export function useLang(): Traducciones {
  const ctx = useContext(LangContext)
  if (!ctx) {
    throw new Error('useLang debe usarse dentro de <LangProvider>')
  }
  return ctx
}
