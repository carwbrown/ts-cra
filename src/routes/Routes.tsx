import React from "react";
import { Switch, Route } from "react-router-dom";

import Heroes from "../app/containers/Heroes";
import Pokemon from "../app/containers/Pokemon";
import Login from "../app/Login";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" render={() => <Login />} />
      <ProtectedRoute path="/" exact>
        <Heroes />
      </ProtectedRoute>
      <ProtectedRoute path="/pokemon" exact>
        <Pokemon />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
