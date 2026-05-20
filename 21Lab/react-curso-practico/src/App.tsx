import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import noticias from "./data/noticias.json";
import { Noticia } from "./components/Noticia";
import { NoticiaReducida } from "./components/Noticia";
import { NoticiaFull } from "./components/Noticia";
import { Contador } from "./components/Contador";
import { Reloj } from "./components/Reloj";
import { FormularioContacto } from "./components/FormularioContacto";
import { LayoutIntermedio } from "./components/LayoutIntermedio";
import { LangProvider } from "./context/LangContext";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import { PanelTema } from "./components/PanelTema";
import { Boton } from "./components/Boton";
import { withHover } from "./hoc/withHover";
import { ContadorReducer } from "./components/ContadorReducer";

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [total, setTotal] = useState(0);
  const incrementar = () => setTotal((t) => t + 1);
  const BotonConHover = withHover(Boton);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <div>
        <h1>React + TypeScript + Vite</h1>
        <p>Si ves este texto, el lab 2.1 está correcto.</p>
        <p> Gñe </p>
      </div>
      <section id="spacer"></section>

      <div>
        <h1>Noticias</h1>
        <p>Hay {noticias.length} noticias en el JSON.</p>
      </div>
      <section id="spacer"></section>

      <div>
        <h1>Noticias</h1>
        {noticias.length === 0 && <p>No hay noticias publicadas.</p>}
        {noticias.map((noticia) => {
          switch (noticia.id) {
            case "n4":
              return <Noticia key={noticia.id} noticia={noticia} />;
            case "n3":
              return <NoticiaFull key={noticia.id} noticia={noticia} />;
            default:
              return <NoticiaReducida key={noticia.id} noticia={noticia} />;
          }
        })}
      </div>
      <section id="spacer"></section>

      <div>
        <h1>useState</h1>
        <Contador />
      </div>
      <section id="spacer"></section>

      <div>
        <h1>Reloj con useEffect</h1>
        <button type="button" onClick={() => setVisible((v) => !v)}>
          {visible ? "Ocultar" : "Mostrar"} reloj
        </button>
        {visible ? <Reloj /> : <p>Reloj desmontado</p>}
      </div>
      <section id="spacer"></section>

      <div>
        <h1>Formulario</h1>
        <FormularioContacto />
      </div>
      <section id="spacer"></section>

      <div style={{ padding: "1rem" }}>
        <h1>Prop drilling</h1>
        <p>Total (App): {total}</p>
        <LayoutIntermedio mensaje={`Clicks: ${total}`} onAccion={incrementar} />
      </div>
      <section id="spacer"></section>

      <LangProvider>
        <Layout>
          <p>Contenido principal de la página.</p>
        </Layout>
      </LangProvider>
      <section id="spacer"></section>

      <ThemeProvider>
        <h1 style={{ padding: "1rem 1rem 0" }}>Tema con Context</h1>
        <PanelTema />
      </ThemeProvider>
      <section id="spacer"></section>

      <div style={{ padding: "1rem", display: "flex", gap: "1rem" }}>
        <Boton onClick={() => alert("Botón normal")}>Normal</Boton>

        <BotonConHover onClick={() => alert("Botón con hover")}>
          Con hover
        </BotonConHover>
      </div>
      <section id="spacer"></section>

      <div style={{ padding: "1rem" }}>
        <h1>useReducer</h1>
        <ContadorReducer />
      </div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
