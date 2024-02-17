import { createContext, useContext, useState } from "react";
import { getAuthToken, getAvatar, getUserId, getUsername } from "../auth";

const ChatAppContext = createContext();

export const ChatAppContextProvider = ({ children }) => {
  const authToken = getAuthToken();
  const username = getUsername();
  const userAvatar = getAvatar();
  const id = getUserId();

  const [avatar, setAvatar] = useState(userAvatar || null);
  const [user, setUser] = useState(username || null);
  const [token, setToken] = useState(authToken || null);
  const [userId, setUserId] = useState(id || null);
  const [members, setMembers] = useState([]);

  const login = (username, id, avatar, authToken) => {
    setUser(username);
    setUserId(id);
    setAvatar(avatar);
    setToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("avatar");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
    setUser(null);
    setToken(null);
  };

  const updateMembers = (members) => {
    setMembers(members);
  };

  return (
    <ChatAppContext.Provider
      value={{
        user,
        userId,
        avatar,
        token,
        login,
        logout,
        members,
        updateMembers,
      }}
    >
      {children}
    </ChatAppContext.Provider>
  );
};

export const useChatAppContext = () => {
  return useContext(ChatAppContext);
};
