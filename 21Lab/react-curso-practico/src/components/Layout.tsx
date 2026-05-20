import type { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <section>
      <p style={{ fontSize: "0.85rem", color: "#666" }}>
        Layout (no recibe props de idioma)
      </p>
      <Header />
      <main>{children}</main>
    </section>
  );
}
