import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { AuthContext } from "../hooks/authContext";
import { useProvideAuth } from "../hooks/useAuth";

const App = () => {
  const auth = useContext(AuthContext);

  const renderRoutes = () => {
    return (
      <Route
        exact
        path="/"
        render={() => (auth?.token ? <Home /> : <Redirect to="/login" />)}
      />
    );
  };

  console.log(auth?.token);
  return (
    <Switch>
      <Route
        path="/login"
        render={() => (auth?.token ? <Redirect to="/" /> : <Login />)}
      />
      {renderRoutes()}
    </Switch>
  );
};

export default App;
