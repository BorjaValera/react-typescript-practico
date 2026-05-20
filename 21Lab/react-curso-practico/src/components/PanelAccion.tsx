type PanelAccionProps = {
  mensaje: string;
  onAccion: () => void;
};

export function PanelAccion({ mensaje, onAccion }: PanelAccionProps) {
  return (
    <div>
      <p>{mensaje}</p>
      <button type="button" onClick={onAccion}>
        +1 click
      </button>
    </div>
  );
}
