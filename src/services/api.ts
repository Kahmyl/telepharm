import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNavigationContainerRef } from "@react-navigation/native";

const BASE_URL = "https://telepharm-api.up.railway.app/api";

const navigation = createNavigationContainerRef();

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  async (request) => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    if (request.headers && token) {
      request.headers["authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest.url.includes("login") &&
      !originalRequest.url.includes("register") &&
      !originalRequest._retry
    ) {
      AsyncStorage.setItem("token", "");
      navigation.isReady() && navigation.navigate("Root");
    }
    return Promise.reject(error);
  }
);

export default api;
