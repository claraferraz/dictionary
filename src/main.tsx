import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { WordProvider } from "./context/WordContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <WordProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WordProvider>
    </ThemeProvider>
  </StrictMode>
);
