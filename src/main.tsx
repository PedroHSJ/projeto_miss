import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { AppRoutes } from "./routes/routes.tsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SpeedInsights />
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
