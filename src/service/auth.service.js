import { api } from "./Api";

export const Register = async (data) => {
  try {
    const res = await api.post("/register", data);
    return res;
  } catch (e) {
    // throw new Error(e.massage);
    return { error: true, msg: e.message };
  }
};

export const Login = async (data) => {
  try {
    const res = await api.post("/login", data);
    return res;
  } catch (e) {
    return { error: true, msg: e.message };
  }
};
