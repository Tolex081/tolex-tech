import { createRoot } from "react-dom/client";
/* Fraunces with every axis (opsz, wght, SOFT, WONK) so the display can be
   set soft; Hanken Grotesk for body and UI. Self-hosted via @fontsource. */
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/hanken-grotesk/wght.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
