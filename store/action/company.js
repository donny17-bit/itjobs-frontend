import axios from "../../utils/axios";

export const getCompanyById = (id) => {
  return {
    type: "GET_COMPANY_BY_ID",
    // payload: axios.get(`user/${id}`),
    payload: axios.get(`/company/${id}`),
  };
};

export const updateProfileCompany = (id, data) => {
  return {
    type: "UPDATE_PROFILE_COMPANY",
    // payload: axios.get(`user/${id}`),
    payload: axios.patch(`/company/updateCompanyProfile/${id}`, data),
  };
};
