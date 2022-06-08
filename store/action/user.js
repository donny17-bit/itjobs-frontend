import axios from "../../utils/axios";

// export const getUserById = (id, asA) => {
//   return {
//     type: "GET_USER_BY_ID",
//     payload:
//       asA === "pekerja"
//         ? axios.get(`/user/${id}`)
//         : axios.get(`/company/${id}`),
//   };
// };

export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`/user/${id}`),
  };
};

export const getAllUser = ({ page, limit, searchSkill, sort } = {}) => {
  return {
    type: "GET_ALL_USER",
    payload: axios.get(
      `/user?page=${page}&limit=${limit}&searchSkill=${searchSkill}&sort=${sort}`
    ),
  };
};

export const getSkill = (id) => {
  return {
    type: "GET_SKILL",
    payload: axios.get(`/skill/${id}`),
  };
};
