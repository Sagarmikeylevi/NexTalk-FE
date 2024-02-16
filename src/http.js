import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

export const apiURL = "http://localhost:8000";

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
