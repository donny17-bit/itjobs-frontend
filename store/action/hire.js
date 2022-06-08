import axios from "../../utils/axios";

export const postHire = (id, form) => {
  return {
    type: "POST_HIRE",
    payload: axios.post(`/hire/${id}`, form),
  };
};

export const getHire = (userId) => {
  return {
    type: "GET_HIRE",
    payload: axios.get(`/hire/${userId}`),
  };
};

export const deleteHire = (hireId) => {
  return {
    type: "DELETE_HIRE",
    payload: axios.delete(`/hire/${hireId}`),
  };
};
