import React from "react";

export interface AppContextInterface {
  user?: string;
  token?: string;
  signIn: any;
  signOut: any;
  setUserToken: any;
}

export const AuthContext = React.createContext<AppContextInterface | null>(
  null,
);

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;
