import axios from "../../utils/axios";

export const login = (form, asA) => {
  console.log(asA);
  return {
    type: "LOGIN",
    payload:
      asA === "pekerja"
        ? axios.post(`/auth/user/login`, form)
        : axios.post(`/auth/company/login`, form),
    data: asA,
  };
};

export const registerPekerja = (form) => {
  return {
    type: "REGISTER",
    payload: axios.post(`/auth/user/register`, form),
  };
};

export const registerCompany = (form) => {
  return {
    type: "REGISTER",
    payload: axios.post(`/auth/company/register`, form),
  };
};
