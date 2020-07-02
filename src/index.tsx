import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./app/App";
import { useProvideAuth } from "./hooks/useAuth";
import { AuthContextProvider } from "./hooks/authContext";
import history from "./history";

const AuthContext = ({ children }: any) => {
  const hookValue = useProvideAuth();

  return (
    <AuthContextProvider value={hookValue}>{children}</AuthContextProvider>
  );
};

ReactDOM.render(
  <AuthContext>
    <React.StrictMode>
      <Router history={history}>
        <App />
      </Router>
    </React.StrictMode>
  </AuthContext>,
  document.getElementById("root"),
);
