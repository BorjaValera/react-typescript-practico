import type { ReactNode } from "react";

const estilosBase = {
  padding: "8px 12px",
  border: "1px solid #333",
  borderRadius: "6px",
  backgroundColor: "#fff",
  cursor: "pointer",
} as const;

type BotonProps = {
  children: ReactNode;
  onClick: () => void;
};

export function Boton({ children, onClick }: BotonProps) {
  return (
    <button type="button" style={estilosBase} onClick={onClick}>
      {children}
    </button>
  );
}
