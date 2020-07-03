import React from "react";

// const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

// const getUser = () => sleep(1000).then(() => ({ username: "elmo" }));

export const AuthContext = React.createContext(null);
export function AuthProvider({ children }: any) {
  const [state] = React.useState({
    status: "success",
    error: null as any,
    user: null as any,
  });

  // TODO: sign in
  // set clear values status to pending
  // on success set success and values. set in localstorage
  // on error show error card

  // TODO: sign out
  // set back to default values
  // clear localstorage

  // TODO: on first load pull from localStorage

  /*
  React.useEffect(() => {
    getUser().then(
      (user) => setState({ status: "success", error: null, user }),
      (error) =>
        setState({ status: "error", error: { message: "oh no" }, user: null }),
    );
  }, []);
  */

  return (
    <AuthContext.Provider value={state as any}>
      {state.status === "pending" ? "Loading..." : children}
    </AuthContext.Provider>
  );
}
