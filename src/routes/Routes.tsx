import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../app/Home";
import Login from "../app/Login";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" render={() => <Login />} />
      <ProtectedRoute path="/">
        <Home />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
