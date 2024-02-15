import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001//",
  //   headers: { Authorization: "Bearer YOUR_TOKEN" },
  timeout: 1000,
});

export const API = "http://localhost:3000/api/v1";
