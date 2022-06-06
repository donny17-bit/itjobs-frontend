import axios from "../../utils/axios";

export const getUserById = (id) => {
  return {
    type: "GET_USER_ID",
    payload: axios.get(`user/${id}`),
  };
};

export const getAllUser = () => {
  return {
    type: "GET_ALL_USER",
    payload: axios.get(`user`),
  };
};

export const getSkill = (id) => {
  return {
    type: "GET_SKILL",
    payload: axios.get(`skill/${id}`),
  };
};
