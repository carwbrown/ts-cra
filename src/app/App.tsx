import React from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { useAuthState } from "../hooks/useAuthState";

export function App() {
  const { user } = useAuthState();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}
