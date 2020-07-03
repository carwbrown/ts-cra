import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app/App";
import { AuthProvider } from "./context/AuthProvider";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root"),
);
