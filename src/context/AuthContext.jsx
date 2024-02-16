import { createContext, useContext, useState } from "react";
import { getAuthToken, getAvatar, getUsername } from "../auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const authToken = getAuthToken();
  const username = getUsername();
  const userAvatar = getAvatar();

  const [avatar, setAvatar] = useState(userAvatar || null);
  const [user, setUser] = useState(username || null);
  const [token, setToken] = useState(authToken || null);

  const login = (userData, avatar, authToken) => {
    setUser(userData);
    setAvatar(avatar);
    setToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("avatar");
    localStorage.removeItem("expiration");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, avatar, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
