import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

// Facebook Pixel
declare global {
  interface Window {
    fbq?: (event: string, action: string, data?: Record<string, any>) => void;
  }
}

if (!window.fbq) {
  window.fbq = function () {
    // Fallback if fbq is not loaded
  };
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
