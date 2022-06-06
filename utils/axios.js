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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0MmFmM2QyLTdmNDEtNDU3ZC05NWIyLWVjMGQ5NGFmMDAxYyIsImZ1bGxOYW1lIjoiZG9uaSIsImVtYWlsIjoiZG9uaXdhaHl1MTRAZ21haWwuY29tIiwibm9UZWxwIjo5ODc2NTQzMjEsImFkZHJlc3MiOiJiYW50ZSIsInJvbGUiOiJmdWxsdGltZSIsImRlc2NyaXB0aW9uIjoia3l1dSIsImZpZWxkIjoid2ViIiwiaW1hZ2UiOm51bGwsInNvY2lhbE1lZGlhIjoibGlpLDkwLGt5YWEiLCJzdGF0dXMiOiJhY3RpdmUiLCJVc2VyT1RQIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIyLTA2LTA2VDAyOjE1OjU4LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTA2VDA2OjQ2OjI0LjAwMFoiLCJpYXQiOjE2NTQ0OTkzMDMsImV4cCI6MTY1NDUwMjkwM30.IyBjEGOWD0BmSvQAtYy4Aqk8aE51HoWErHJm5t-not0`,
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
