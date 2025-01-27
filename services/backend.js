import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  // baseURL: "http://10.0.2.2:3000", // Mobile
  baseURL: "http://192.168.0.106:3000", // Home
  // baseURL: "http://192.168.1.127:3000", // Dad's
});

export default api;

/* USER */

export const handleSignin = async (email, password) => {
  try {
    const { data: user } = await api.post("/auth/signin", {
      email,
      password,
    });

    await AsyncStorage.setItem("user", JSON.stringify(user));

    return user;
  } catch (error) {
    throw error;
  }
};

export const handleSignout = async () => {
  try {
    await api.post("/auth/signout");

    await AsyncStorage.removeItem("user");
    console.log("Successfully signed out.");
  } catch (error) {
    await AsyncStorage.removeItem("user");
    throw error;
  }
};

export const handleRegister = async (formData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await api.post("/auth/register", formData, config);

    return data;
  } catch (error) {
    throw error;
  }
};
