import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { TooltipProvider } from "@theanalog/orphos/tooltip";

import { Toaster } from "@theanalog/orphos/toast";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <App />
      <Toaster />
    </TooltipProvider>
  </StrictMode>
);
