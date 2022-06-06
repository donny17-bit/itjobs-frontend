import axios from "axios";
import Cookies from "js-cookie";

const axiosApiInstance = axios.create({
  baseURL: process.env.URL_BACKEND,
});

// Add a request interceptor
axiosApiInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      // Authorization: `Bearer ${Cookies.get("token")}`,
      // for temporary, as long as cookies not set
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0MmFmM2QyLTdmNDEtNDU3ZC05NWIyLWVjMGQ5NGFmMDAxYyIsImZ1bGxOYW1lIjoiRG9uaSBXYWh5dSIsImVtYWlsIjoiZG9uaXdhaHl1MTRAZ21haWwuY29tIiwibm9UZWxwIjo5ODc2NTQzMjEsImFkZHJlc3MiOm51bGwsInJvbGUiOiJudWxsIiwiZGVzY3JpcHRpb24iOm51bGwsImZpZWxkIjpudWxsLCJpbWFnZSI6bnVsbCwic29jaWFsTWVkaWEiOm51bGwsInN0YXR1cyI6ImFjdGl2ZSIsIlVzZXJPVFAiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjItMDYtMDZUMDI6MTU6NTguMDAwWiIsInVwZGF0ZWRBdCI6bnVsbCwiaWF0IjoxNjU0NDkwMTE2LCJleHAiOjE2NTQ0OTM3MTZ9.mFkwb98VwPiNzlhYWJ2_jDyOg9Sx3c7E6Sw2QrKlvxw`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403) {
      if (error.response.data.msg !== "jwt expired") {
        Cookies.clear();
        window.location.href = "/auth/login";
      } else {
        const refreshToken = localStorage.getItem("refreshToken");
        axiosApiInstance
          .post("auth/refresh", { refreshToken })
          .then((res) => {
            Cookies.set("token", res.data.data.token);
            Cookies.set("refreshToken", res.data.data.refreshToken);
            window.location.reload();
          })
          .catch(() => {
            Cookies.clear();
            window.location.href = "/auth/login";
          });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
