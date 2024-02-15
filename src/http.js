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
