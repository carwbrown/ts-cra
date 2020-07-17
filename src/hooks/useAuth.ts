import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useRouter } from "./useRouter";

const useAuth = () => {
  const [userState, setUserState] = useContext(AuthContext) as any;
  const { push } = useRouter();

  const [errors, setErrors] = useState<null | string>(null);

  function login(userName: string, password: string) {
    if (userName === "test@email.com" && password === "testtest") {
      const token = "abc123";
      setUserState({ user: { userName: userName, token: token } });
      localStorage.setItem("token", token);
      setErrors(null);
      push("/");
    } else {
      setErrors(
        "Not a valid user. Try email // password: test@email.com // testtest",
      );
      localStorage.removeItem("token");
      setUserState(null);
    }
  }

  const logout = () => {
    setUserState(null);
    setErrors(null);
    localStorage.removeItem("token");
    push("/login");
  };

  const isUserLoggedIn = () => {
    return userState?.user?.token || localStorage.getItem("token")
      ? true
      : false;
  };

  return {
    login,
    logout,
    userState,
    isUserLoggedIn,
    errors,
  };
};

export default useAuth;
