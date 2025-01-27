import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { TooltipProvider } from "@theanalog/orphos/tooltip";

import { ToastProvider } from "@theanalog/orphos/toast";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </ToastProvider>
  </StrictMode>,
);
