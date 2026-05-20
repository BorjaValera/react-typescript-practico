import type { ReactNode } from 'react'
import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import { Layout } from './components/Layout'
import { PanelTema } from './components/PanelTema'
import { Boton } from './components/Boton'
import { ContadorReducer } from './components/ContadorReducer'
import { CajaMovil } from './components/CajaMovil'
import { InfoUsuario } from './components/InfoUsuario'
import { Lab70PropDrilling } from './components/Lab70PropDrilling'
import { withHover } from './hoc/withHover'
import { withData } from './hoc/withData'

const BotonConHover = withHover(Boton)

const InfoUsuarioConDatos = withData(
  InfoUsuario,
  'https://jsonplaceholder.typicode.com/users/1'
)

function Section({
  id,
  title,
  summary,
  children,
}: {
  id: string
  title: string
  summary?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      style={{
        marginBottom: '2rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid #e5e5e5',
      }}
    >
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {summary ? (
        <p style={{ fontSize: '0.9rem', color: '#555' }}>{summary}</p>
      ) : null}
      {children}
    </section>
  )
}

function Lab76CajaDemo() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <p>
        La caja usa <code>position: fixed</code> respecto al viewport (lab 7.6).
        Pulsa «Mostrar caja», haz clic en la página para enfocar la ventana y usa
        las flechas del teclado.
      </p>
      <button type="button" onClick={() => setVisible((v) => !v)}>
        {visible ? 'Ocultar' : 'Mostrar'} caja
      </button>
      {visible ? <CajaMovil /> : null}
    </div>
  )
}

function AppContent() {
  return (
    <div style={{ maxWidth: 880, margin: '0 auto', paddingBottom: '4rem' }}>
      <h1 style={{ paddingTop: '0.5rem' }}>
        Demo — laboratorios 7.x (curso práctico)
      </h1>
      <p>
        Un solo proyecto Vite con los ejemplos de los MD{' '}
        <code>07-00</code> … <code>07-07</code>. Referencias en{' '}
        <code>react-typescript-practico/</code>.
      </p>

      <Section
        id="lab-70"
        title="7.0 — Prop drilling"
        summary="Estado y callback en la raíz de la sección; el intermediario solo reenvía props."
      >
        <Lab70PropDrilling />
      </Section>

      <Section
        id="lab-71-77"
        title="7.1 y 7.7 — Context idioma + hook useLang()"
        summary="LangProvider + Layout + Header que consume traducciones vía useLang (sin drilling)."
      >
        <Layout>
          <p>Contenido principal de la página (dentro de Layout).</p>
        </Layout>
      </Section>

      <Section
        id="lab-72"
        title="7.2 — Context tema claro / oscuro"
        summary="Botón global arriba (ThemeProvider); PanelTema usa useTheme()."
      >
        <PanelTema />
      </Section>

      <Section
        id="lab-73"
        title="7.3 — HOC withHover"
        summary="Botón envuelto con opacidad al pasar el ratón."
      >
        <div style={{ padding: '0.5rem 0', display: 'flex', gap: '1rem' }}>
          <Boton onClick={() => alert('Botón normal')}>Normal</Boton>
          <BotonConHover onClick={() => alert('Botón con hover')}>
            Con hover
          </BotonConHover>
        </div>
      </Section>

      <Section
        id="lab-74"
        title="7.4 — HOC withData (fetch)"
        summary="JSONPlaceholder users/1 — requiere red."
      >
        <InfoUsuarioConDatos />
      </Section>

      <Section
        id="lab-75"
        title="7.5 — useReducer (contador)"
        summary="Acciones tipadas en contadorReducer."
      >
        <ContadorReducer />
      </Section>

      <Section id="lab-76" title="7.6 — useReducer + teclado (caja)" summary="">
        <Lab76CajaDemo />
      </Section>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </ThemeProvider>
  )
}

export default App
