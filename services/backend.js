import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://192.168.0.106:3000",
});

export default api;

/* USER */

export const handleSignin = async (email, password) => {
  try {
    const { data } = await api.post("/auth/signin", {
      email,
      password,
    });
    console.log("DATA", data);

    const userData = {
      user: data.user,
      session: data.session,
    };

    await AsyncStorage.setItem("user", JSON.stringify(userData));
    console.log("USERDATA in Backend:", userData);

    return userData;
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
