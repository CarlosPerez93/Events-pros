import "dotenv";
import axios from "axios";

const API_URL = process.env.API_URL;

const register = async (email: string, username: string, password: string) => {
  return await axios.post(API_URL + "/auth/register", {
    email,
    username,
    password,
  });
};

const login = async (username: string, password: string) => {
  return await axios
    .post(API_URL + "/auth/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username)
        localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    });
};

const logout = async () => {
  localStorage.removeItem("user");
  return await axios.post(API_URL + "auth/logout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  const user = JSON.stringify(localStorage.getItem("user"));
  return JSON.parse(user);
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
