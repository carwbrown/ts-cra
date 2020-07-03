import React from "react";
import { useAuthState } from "../hooks/useAuthState";
import Home from "./Home";
// TODO routes

export default function AuthenticatedApp() {
  const { user } = useAuthState();
  return (
    <>
      <h1> Logged in! {user.username}</h1>
      <Home />
    </>
  );
}
