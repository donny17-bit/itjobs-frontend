import axios from "../../utils/axios";

export const getUserById = (id, asA) => {
  console.log(id);
  return {
    type: "GET_USER_BY_ID",
    // payload: axios.get(`user/${id}`),
    payload:
      asA === "pekerja"
        ? axios.get(`/user/${id}`)
        : axios.get(`/company/${id}`),
  };
};
