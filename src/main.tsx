import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./styles/themes.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
