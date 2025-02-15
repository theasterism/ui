import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { TooltipProvider } from "@theanalog/orphos/tooltip";

import { ToastProvider } from "@theanalog/orphos/toast";
import { App } from "./App";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      <ToastProvider>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>,
);
