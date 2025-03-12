import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

const getBaseURL = async () => {
  const state = await NetInfo.fetch();

  if (state.details && state.details.ipAddress) {
    const localIP = state.details.ipAddress;
    console.log("Detected IP:", localIP);

    if (localIP.startsWith("192.168.0.")) return "http://192.168.0.106:3000"; // Home
    if (localIP.startsWith("192.168.1.")) return "http://192.168.1.127:3000"; // Dad's
    if (localIP.startsWith("192.168.167.")) return "http://192.168.167.43:3000"; // Work
  }

  return "http://10.0.2.2:3000"; // Default for mobile emulator
};

const createApi = async () => {
  const baseURL = await getBaseURL();
  return axios.create({ baseURL });
};
export default createApi;

/* USER */

export const handleSignin = async (email, password) => {
  const api = await createApi();
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
  const api = await createApi();
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
  const api = await createApi();
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
  const api = await createApi();
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
