import { useState } from "react";

// TODO: Completar esto.

export function Contador() {
  const [cuenta, setCuenta] = useState(0);

  const reductor = (estado: number, accion: string) => {
    switch (accion) {
      case "inc":
        estado = estado + 1;
        if (estado > 10) {
          console.log("Máximo alcanzado");
          estado = 10;
        }
        return estado;
      case "dec":
        estado = estado - 1;
        if (estado < 0) {
          estado = 0;
        }
        return estado;
      default:
        return estado;
    }
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <button
        type="button"
        onClick={() => {
          setCuenta(reductor(cuenta, "dec"));
        }}
      >
        −
      </button>
      <span>Cuenta: {cuenta}</span>
      <button
        type="button"
        onClick={() => {
          setCuenta(reductor(cuenta, "inc"));
        }}
      >
        +
      </button>
      <button type="button" onClick={() => setCuenta(0)}>
        Reiniciar
      </button>
    </div>
  );
}
