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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1OTNmNzc2LThhNzgtNDMzNC1iYjgzLTFmYjUxZDFhOTVhYiIsImZ1bGxOYW1lIjoiSmF1aGFyIE1ha251biIsImVtYWlsIjoiYWRpYm1ha251bjE2QGdtYWlsLmNvbSIsIm5vVGVscCI6OTg3NjU0MzIxLCJhZGRyZXNzIjoiWW9neWFrYXJ0YSIsInJvbGUiOiJmdWxsdGltZSIsImRlc2NyaXB0aW9uIjoiZXhwZXJpZW5jZSAgaW4gZnVsbHN0YWNrIFVJIGFuZCBVWCBkZXNpZ25lciBmb3IgNiB5ZWFycywgZXhwZXJ0IGluIGFkb2JlIGRlc2lnbiwgbGljZW5zZWQgaW4gYWRvYmUgZGVzaWduIiwiaW1hZ2UiOm51bGwsInNvY2lhbE1lZGlhIjoibmF0YXNoYTM0NSxuYXRhc2hhLG5hdGFzaGFpZCIsInN0YXR1cyI6Im5vdEFjdGl2ZSIsIlVzZXJPVFAiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjItMDYtMDVUMDQ6MTU6MTEuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMDVUMTg6MTA6MjEuMDAwWiIsImlhdCI6MTY1NDQ0OTQ2MywiZXhwIjoxNjU0NDUzMDYzfQ.E0add53tWh-1yPNwLC6Gx5m7BL1NIaCtS3P6lrQl9Hs`,
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
