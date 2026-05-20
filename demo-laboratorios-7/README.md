# Demo laboratorios capítulo 7

Proyecto **Vite + React + TypeScript** que concentra en una sola app los ejemplos de los laboratorios **7.0–7.7** del curso (`07-00-lab-*.md` … `07-07-lab-*.md` en la raíz del repo práctico).

## Cómo arrancarlo

```bash
cd demo-laboratorios-7
npm install
npm run dev
```

Abre la URL que muestra Vite (normalmente `http://localhost:5173`).

## Qué incluye

| Sección | Labs |
|--------|------|
| Prop drilling | 7.0 |
| Idioma + Layout + Header | 7.1, 7.7 (`useLang`) |
| Panel tema | 7.2 |
| Botones / `withHover` | 7.3 |
| Usuario remoto / `withData` | 7.4 (necesita red) |
| Contador | 7.5 |
| Caja con flechas | 7.6 (`position: fixed`; mostrar/ocultar desde la demo) |

Los providers **`ThemeProvider`** y **`LangProvider`** envuelven toda la página para que puedas mezclar secciones sin reescribir `App` entre labs.
