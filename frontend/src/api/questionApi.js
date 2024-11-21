import axios from "axios";

const questionApi = axios.create({
  baseURL: "https://q-aplatform-mauve.vercel.app/api/",
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
