const initialState = {
  data: [],
  // otherData: [], //other data if needed
  isLoading: false,
  isError: false,
  msg: "",
};

const company = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMPANY_BY_ID_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_COMPANY_BY_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "GET_COMPANY_BY_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        msg: action.payload.response.data,
      };

    case "UPDATE_PROFILE_COMPANY_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "UPDATE_PROFILE_COMPANY_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };

    case "UPDATE_PROFILE_COMPANY_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        // msg: action.payload.response.data,
      };

    default:
      return state;
  }
};

export default company;
