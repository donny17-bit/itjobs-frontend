const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const hire = (state = initialState, action) => {
  switch (action.type) {
    case "POST_HIRE_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "POST_HIRE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "POST_HIRE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data,
      };

    case "GET_HIRE_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_HIRE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "GET_HIRE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        msg: action.payload.response.data,
      };

    case "DELETE_HIRE_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "DELETE_HIRE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };

    case "DELETE_HIRE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data,
      };

    default:
      return state;
  }
};

export default hire;
