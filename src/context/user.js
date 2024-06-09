import { createContext } from "react";

export const ContextValue = {
  isLogin: false,
  userId: "",
  displayName: "",
  firstName: "",
  lastName: "",
  email: "",
};

export const AuthContext = createContext(null);
