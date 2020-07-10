import React from "react";

const AuthContext = React.createContext([{}, () => {}]);

function AuthProvider({ children }: any) {
  const [userState, setUserState] = React.useState({
    user: null,
  });
  return (
    <AuthContext.Provider value={[userState, setUserState]}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
