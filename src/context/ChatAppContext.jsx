import { createContext, useContext, useEffect, useState } from "react";
import { getAuthToken, getAvatar, getUserId, getUsername } from "../auth";
import { io } from "socket.io-client";

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
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [userId]);

  useEffect(() => {
    if (socket === null) return;
    socket.emit("addNewUser", userId);
    socket.on("getOnlineUsers", (res) => {
      setOnlineUsers(res);
    });

    return () => {
      socket.off("getOnlineUsers");
    };
  }, [socket]);

  useEffect(() => {
    if (socket === null) return;

    const secondPersonId = secondPerson.id;

    socket.emit("sendMessage", { ...newMessage, secondPersonId });
  }, [newMessage]);

  useEffect(() => {
    if (socket === null) return;

    socket.on("getMessage", (res) => {
      if (activeChatId !== res.chatId) return;

      setMessages((prev) => [...prev, res]);
    });

    return () => {
      socket.off("getMessage");
    };
  }, [socket, activeChatId]);

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

  const updateMessages = (messages) => {
    setMessages(messages);
  };

  const updateNewMessage = (message) => {
    setNewMessage(message);
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
        onlineUsers,
        socket,
        messages,
        updateMessages,
        updateNewMessage,
      }}
    >
      {children}
    </ChatAppContext.Provider>
  );
};

export const useChatAppContext = () => {
  return useContext(ChatAppContext);
};
