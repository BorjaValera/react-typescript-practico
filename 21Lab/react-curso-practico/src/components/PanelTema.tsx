import { useTheme } from "../context/ThemeContext";

export function PanelTema() {
  const { estilos, modo } = useTheme();

  return (
    <section style={estilos}>
      <h2>Panel con tema</h2>
      <p>
        Modo actual: <strong>{modo}</strong>
      </p>
      <p>Este bloque no recibe estilos por props.</p>
    </section>
  );
}
