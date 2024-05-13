import axios from "axios";
import { backendUrl } from "../config/config";

export const AxiosLib = axios.create({
  baseURL: backendUrl ?? "http://localhost:3000",
  withCredentials: true,
});
