import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SiteConfigProvider } from "./hooks/useSiteConfig";
import "./styles.css";

const routerBaseName = import.meta.env.BASE_URL === "./" ? "/" : import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SiteConfigProvider>
      <BrowserRouter basename={routerBaseName}>
        <App />
      </BrowserRouter>
    </SiteConfigProvider>
  </React.StrictMode>,
);
