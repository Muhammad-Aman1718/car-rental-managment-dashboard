import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", // API Base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
