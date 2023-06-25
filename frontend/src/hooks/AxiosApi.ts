import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const api = axios.create({
  withCredentials: true,
  // baseURL: "http://localhost:5000",
});

export default api;
