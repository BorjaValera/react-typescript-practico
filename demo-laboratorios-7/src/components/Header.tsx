import { useLang } from '../hooks/useLang'

export function Header() {
  const t = useLang()

  return (
    <header style={{ margin: '1rem 0', borderBottom: '1px solid #ccc' }}>
      <h1>{t.bienvenida}</h1>
      <p>{t.despedida}</p>
    </header>
  )
}
