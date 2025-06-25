import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api": "/api",  // use live URL after deploy
});

export default api;
