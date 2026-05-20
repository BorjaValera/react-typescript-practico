import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export function Header() {
  const t = useContext(LangContext);

  if (!t) {
    return <p>Error: falta LangProvider</p>;
  }

  return (
    <header style={{ margin: "1rem 0", borderBottom: "1px solid #ccc" }}>
      <h1>{t.bienvenida}</h1>
      <p>{t.despedida}</p>
    </header>
  );
}
