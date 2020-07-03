import React from "react";
import { AuthContext } from "../context/AuthProvider";

export function useAuthState() {
  const state: any = React.useContext(AuthContext);
  const isPending = state?.status === "pending";
  const isError = state?.status === "error";
  const isSuccess = state?.status === "success";
  const isAuthenticated = state?.user && isSuccess;
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}
