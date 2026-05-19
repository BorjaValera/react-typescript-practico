import { useState, useEffect } from "react";

function formatearHora(fecha: Date): string {
  return fecha.toLocaleTimeString("es-ES", { hour12: false });
}

export function Reloj() {
  const [hora, setHora] = useState(() => formatearHora(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      console.log("Effect, creo");
      setHora(formatearHora(new Date()));
    }, 1000);

    return () => {
      console.log("Limpieza, creo");
      window.clearInterval(id);
    };
  }, []);

  return (
    <div>
      <p>Hora: {hora}</p>
    </div>
  );
}
