"use client";
import { GET_USER_ROUTE } from "@/core/data/apiRoutes";
import axios from "axios";
import { createContext, useCallback, useEffect, useReducer } from "react";
interface InitialUser {
  isAuth: false;
  userChangedLanguage: false;
  token: null;
  user: userProps;
  getUser?: (callback?: (data: any) => void) => void;
  clearUser?: () => void;
  changeUser?: (user: {}) => void;
  changeAuthState?: (isAuth: Boolean) => void;
  clearToken?: () => void;
  setToken?: (token: string) => void;
}
interface userProps {
  role: string;
  permissions: string[];
  token: string;
  name: string;
}

const initialUser: InitialUser = {
  isAuth: false,
  userChangedLanguage: false,
  token: null,
  user: {
    role: "",
    permissions: [],
    token: "",
    name: "",
  },
};

const reducer = (state: InitialUser, action: any) => {
  switch (action.type) {
    case "CLEAR_USER":
      return { ...state, user: {} };
    case "CHANGE_USER":
      return { ...state, user: action.user };
    case "CHANGE_AUTH_STATE":
      return { ...state, isAuth: action.isAuth };
    case "CLEAR_TOKEN":
      localStorage.removeItem("_token");
      return { ...state, token: null };
    case "SET_TOKEN":
      localStorage.setItem("_token", action.token);
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export const UserContext = createContext(initialUser);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialUser);

  const clearUser = useCallback(() => {
    dispatch({ type: "CLEAR_USER" });
  }, []);

  const changeUser = useCallback((user: {}) => {
    dispatch({ type: "CHANGE_USER", user });
  }, []);

  const changeAuthState = useCallback((isAuth: Boolean) => {
    dispatch({ type: "CHANGE_AUTH_STATE", isAuth });
  }, []);

  const clearToken = useCallback(() => {
    dispatch({ type: "CLEAR_TOKEN" });
  }, []);

  const setToken = useCallback((token: string) => {
    dispatch({ type: "SET_TOKEN", token });
  }, []);

  const getUser = useCallback(
    (callback?: (data: any) => void) => {
      axios
        .get(GET_USER_ROUTE, {
          headers: { authorization: `Bearer ${state.token}` },
        })
        .then(({ data }) => {
          if (typeof callback === "function") callback(data);
        })
        .catch((error) => {
          if (error.response.status === 401) clearToken();
        });
    },
    [state.token, clearToken]
  );

  useEffect(() => {
    const localToken = localStorage.getItem("_token");
    if (localToken) dispatch({ type: "SET_TOKEN", token: localToken });
  }, []);

  useEffect(() => {
    if (!state.token) {
      clearUser();
      changeAuthState(false);
      return;
    }
    getUser((data) => {
      changeUser(data);
      changeAuthState(true);
    });
  }, [state.token]);

  return (
    <UserContext.Provider
      value={{
        isAuth: state.isAuth,
        userChangedLanguage: state.userChangedLanguage,
        token: state.token,
        user: state.user,
        getUser,
        clearUser,
        changeUser,
        changeAuthState,
        clearToken,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
