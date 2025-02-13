import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { enableLegacyWebImplementation } from "react-native-gesture-handler";
import { SharedTransitionType } from "react-native-reanimated";

const api = axios.create({
  // baseURL: "http://10.0.2.2:3000", // Mobile
  // baseURL: "http://192.168.0.106:3000", // Home
  baseURL: "http://192.168.1.127:3000", // Dad's
});

export default api;

export const fetchMonths = async () => {
  try {
    const { data } = await api.get("grow/months");

    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchMonthlyJobs = async (monthId) => {
  try {
    const { data } = await api.get(`/produce/months/${monthId}/jobs`);

    return data;
  } catch (error) {
    throw error;
  }
};
