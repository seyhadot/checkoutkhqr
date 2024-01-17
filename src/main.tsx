import ReactDOM from "react-dom/client";
import "../app/globals.css";

import { RouterProvider } from "react-router-dom";

import React from "react";
import { router } from "./routes/routes.tsx";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
