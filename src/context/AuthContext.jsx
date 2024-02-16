import { createContext, useContext, useState } from "react";
import { getAuthToken, getUsername } from "../auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const getToken = getAuthToken();
  const getUser = getUsername();
  const [user, setUser] = useState(getUser || null);
  const [token, setToken] = useState(getToken || null);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("expiration");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
