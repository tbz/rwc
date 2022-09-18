import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createCustomElement } from "@tbz/rwc";

createCustomElement(
  ReactDOM.createRoot,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  "react-app"
);
