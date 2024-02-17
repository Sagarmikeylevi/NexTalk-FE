import { createContext, useContext, useState } from "react";
import { getAuthToken, getAvatar, getUserId, getUsername } from "../auth";

const ChatAppContext = createContext();

export const ChatAppContextProvider = ({ children }) => {
  const authToken = getAuthToken();
  const username = getUsername();
  const userAvatar = getAvatar();
  const id = getUserId();

  const [showSidebar, setShowSidebar] = useState(true);
  const [avatar, setAvatar] = useState(userAvatar || null);
  const [user, setUser] = useState(username || null);
  const [token, setToken] = useState(authToken || null);
  const [userId, setUserId] = useState(id || null);
  const [members, setMembers] = useState([]);
  const [secondPerson, setSecondPerson] = useState({});
  const [activeChatId, setActiveChatId] = useState(null);

  const updateSideBar = () => {
    setShowSidebar((prevState) => !prevState);
  };

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

  const updateSecondPerson = (secondPerson) => {
    setSecondPerson(secondPerson);
  };

  const updateActiveChatId = (chatId) => {
    setActiveChatId(chatId);
  };

  return (
    <ChatAppContext.Provider
      value={{
        showSidebar,
        updateSideBar,
        user,
        userId,
        avatar,
        token,
        login,
        logout,
        members,
        updateMembers,
        secondPerson,
        updateSecondPerson,
        activeChatId,
        updateActiveChatId,
      }}
    >
      {children}
    </ChatAppContext.Provider>
  );
};

export const useChatAppContext = () => {
  return useContext(ChatAppContext);
};
