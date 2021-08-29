import { getCookie } from "../utils/cookies";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: `Bearer ${getCookie?.("access_token")}`,
  },
});

export default api;
