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

export const forgotPassword = (form, asA) => {
  return {
    type: "FORGOT_PASSWORD",
    payload:
      asA === "pekerja"
        ? axios.post(`/auth/user/forgotPassword`, form)
        : axios.post(`/auth/company/forgotPassword`, form),
    // data: asA,
  };
};

export const resetPassword = (form, asA) => {
  return {
    type: "FORGOT_PASSWORD",
    payload:
      asA === "user"
        ? axios.patch(`/auth/user/resetPassword`, form)
        : axios.patch(`/auth/company/resetPassword`, form),
    // data: asA,
  };
};

export const logout = (refreshToken) => {
  return {
    type: "LOGOUT",
    payload: axios.post("/auth/logout", refreshToken),
  };
};
