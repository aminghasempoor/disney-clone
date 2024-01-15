import { useContext } from "react";
import { UserContext } from "../contexts/user";

const useUser = () => {
  const {
    isAuth,
    userChangedLanguage,
    token,
    user,
    getUser,
    clearUser,
    changeUser,
    changeAuthState,
    clearToken,
    setToken,
  } = useContext(UserContext);

  return {
    isAuth,
    userChangedLanguage,
    token,
    user,
    getUser,
    clearUser,
    changeUser,
    changeAuthState,
    clearToken,
    setToken,
  };
};

export default useUser;
