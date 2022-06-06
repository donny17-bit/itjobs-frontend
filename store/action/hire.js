import axios from "../../utils/axios";

export const postHire = (id, form) => {
  return {
    type: "POST_HIRE",
    payload: axios.post(`hire/${id}`, form),
  };
};
