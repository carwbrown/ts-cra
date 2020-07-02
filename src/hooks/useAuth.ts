import { useState } from "react";

export function useProvideAuth() {
  const [user, setUser] = useState<string | undefined>(undefined);
  const [token, setToken] = useState(
    localStorage.getItem("accessToken") ?? undefined,
  );

  const setUserToken = (newToken: string) => {
    setToken(newToken);
    if (!localStorage.getItem("accessToken")) {
      localStorage.setItem("accessToken", newToken);
    }
    if (newToken === undefined) {
      localStorage.removeItem("accessToken");
    }
  };
  // Wrap any methods we want to use making sure ...
  // ... to save the user to state.
  const signIn = async (email: string, password: string) => {
    setUserToken(password + email);
    setUser(email);

    return true;
  };

  const signOut = () => {
    setToken(undefined);
    localStorage.removeItem("accessToken");
    setUser(undefined);
  };

  // Return the user object and auth methods
  return {
    user,
    token,
    signIn,
    signOut,
    setUserToken,
  };
}
