import { PanelAccion } from './PanelAccion'

type LayoutIntermedioProps = {
  mensaje: string
  onAccion: () => void
}

export function LayoutIntermedio({
  mensaje,
  onAccion,
}: LayoutIntermedioProps) {
  return (
    <section
      style={{
        border: '1px dashed #999',
        padding: '1rem',
        marginTop: '1rem',
      }}
    >
      <p style={{ fontSize: '0.85rem', color: '#666' }}>
        LayoutIntermedio — solo reenvía props (prop drilling)
      </p>
      <PanelAccion mensaje={mensaje} onAccion={onAccion} />
    </section>
  )
}
