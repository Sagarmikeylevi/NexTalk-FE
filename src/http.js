import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

export const apiURL = "https://nextalk-glyz.onrender.com";

export const registerUser = async (userData) => {
  try {
    await axios.post(`${apiURL}/api/user/register`, userData);
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${apiURL}/api/user/login`, loginData);

    const token = response.data.data.token;
    const user = response.data.data.user;

    localStorage.setItem("token", token);
    localStorage.setItem("username", user.username);
    localStorage.setItem("avatar", user.avatar);
    localStorage.setItem("userId", user.id);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    return {
      token,
      user,
    };
  } catch (error) {
    throw error;
  }
};

export const getAllMembers = async (userId) => {
  try {
    const response = await axios.get(`${apiURL}/api/user/getUsers`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const users = response.data.data.users;

    const members = users.filter((user) => user.id !== userId);

    return members;
  } catch (error) {
    throw error;
  }
};

export const createChat = async (firstPerson, secondPerson) => {
  try {
    const response = await axios.post(`${apiURL}/api/chat/`, {
      firstPerson,
      secondPerson,
    });

    return response.data._id;
  } catch (error) {
    throw error;
  }
};

export const getMessages = async (chatId) => {
  try {
    const response = await axios.get(`${apiURL}/api/message/${chatId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendChat = async (chatId, senderId, text) => {
  try {
    const response = await axios.post(`${apiURL}/api/message/`, {
      chatId,
      senderId,
      text,
    });

    // console.log(response);

    return response.data;
  } catch (error) {
    throw error;
  }
};
