import axios from "axios";

// Base API configuration
const API = axios.create({
  baseURL:"https://msd-full-stack.onrender.com/api",
});

// Automatically attach token to protected requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
