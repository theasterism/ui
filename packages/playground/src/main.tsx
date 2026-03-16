import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/geist/latin.css";
import "@fontsource/geist-mono/latin.css";
import "@fontsource/jetbrains-mono/latin.css";
import "./index.css";
import { ToastProvider } from "orphos/toast";
import { TooltipProvider } from "orphos/tooltip";
import { App } from "./App";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <TooltipProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
);
