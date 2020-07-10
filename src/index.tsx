import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
