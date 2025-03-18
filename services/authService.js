import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  // baseURL: "http://10.0.2.2:3000", // Mobile
  baseURL: "http://192.168.0.106:3000", // Home
  // baseURL: "http://192.168.1.127:3000", // Dad's
  // baseURL: "http://192.168.167.43:3000",
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
    if (error.response) {
      const { statusCode, message } = error.response.data;
      throw { statusCode, message };
    } else if (error.request) {
      throw {
        statusCode: 503,
        message: "No response from server. Check your connection.",
      };
    } else {
      throw { statusCode: 500, message: "An unexpected error occurred." };
    }
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
    console.log("Returned data:", data);

    const message = data.message;
    const user = data.user;

    const userWrapper = { user };

    await AsyncStorage.setItem("user", JSON.stringify(userWrapper));

    return { message, user };
  } catch (error) {
    throw error;
  }
};

export const handlePasswordResetRequest = async (email) => {
  try {
    console.log("Email received:", email);

    const { data } = await api.post("/auth/reset-password", {
      email: email,
    });

    return data;
  } catch (error) {
    if (error.response) {
      const { statusCode, message } = error.response.data;
      throw { statusCode, message };
    } else if (error.request) {
      throw {
        statusCode: 503,
        message: "No response from server. Check your connection.",
      };
    } else {
      throw { statusCode: 500, message: "An unexpected error occurred." };
    }
  }
};
