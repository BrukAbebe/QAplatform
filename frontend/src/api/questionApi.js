import axios from "axios";

const questionApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api/",
});

questionApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default questionApi;
