import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FaGrinTongueWink } from "react-icons/fa";

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

    localStorage.setItem("token", token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    return;
  } catch (error) {
    throw error;
  }
};
