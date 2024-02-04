import axios from "axios";
import { API_ENDPOINT } from "./contact";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});
