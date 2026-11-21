import { createRoot } from "react-dom/client";
import "@fontsource-variable/bodoni-moda/opsz.css";
import "@fontsource-variable/bodoni-moda/opsz-italic.css";
import "@fontsource-variable/schibsted-grotesk/wght.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
