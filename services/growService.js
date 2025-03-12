import axios from "axios";
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

// Create API instance dynamically
const createApi = async () => {
  const baseURL = await getBaseURL();
  return axios.create({ baseURL });
};

export default createApi;

// Fetch functions must be wrapped inside an async function that initializes `api`
export const fetchMonths = async () => {
  const api = await createApi(); // Ensure API is created before usage
  try {
    const { data } = await api.get("grow/months");
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchMonthlyJobs = async (monthId) => {
  const api = await createApi();
  try {
    const { data } = await api.get(`/grow/months/${monthId}/jobs`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchMonthlyData = async (monthId) => {
  const api = await createApi();
  try {
    const { data } = await api.get(`/grow/months/${monthId}/data`);
    console.log("monthly data:", data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllProduce = async () => {
  const api = await createApi();
  try {
    const { data } = await api.get("/grow/produce");
    return data;
  } catch (error) {
    throw error;
  }
};
