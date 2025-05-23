import axios from "axios";

const api = axios.create({
  // baseURL: "http://10.0.2.2:3000", // Mobile
  // baseURL: "http://192.168.0.106:3000", // Home
  baseURL: "http://192.168.1.127:3000", // Dad's
  // baseURL: "http://192.168.15.43:3000",
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
    const { data } = await api.get(`/grow/months/${monthId}/jobs`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchMonthlyData = async (monthId) => {
  try {
    const { data } = await api.get(`/grow/months/${monthId}/data`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllProduce = async () => {
  try {
    const { data } = await api.get("/grow/produce");

    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchProduceById = async (produceId) => {
  try {
    const { data } = await api.get(`/grow/produce/${produceId}`);

    return data;
  } catch (error) {
    throw error;
  }
};
