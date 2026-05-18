import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const reactNodeParam = (
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(document.getElementById("root")!).render(reactNodeParam);
