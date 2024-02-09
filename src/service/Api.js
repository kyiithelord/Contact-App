import axios from "axios";
import { API_ENDPOINT } from "../lib/contact";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});
