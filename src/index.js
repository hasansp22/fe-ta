import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/app.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import App from "./App";
import "bulma/css/bulma.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProSidebarProvider>
    <App />
  </ProSidebarProvider>
);
