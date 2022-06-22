import axios from "axios";
import Cookie from "js-cookie";

const axiosClient = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = Cookie.get("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  async (error) => {
    const refreshToken = Cookie.get("refresh_token");
    if (
      error.response.data.status === 401 &&
      error.response.data.keyError === "expired"
    ) {
      return axiosClient
        .post("/auth/refresh-token", {
          refreshToken,
        })
        .then((response) => {
          Cookie.set("access_token", response.token);
          error.response.config.headers["Authorization"] = "Bearer " + response.token;
          return axiosClient;
        })
        .catch((error) => {
          Cookie.remove("access_token");
          Cookie.remove("refresh_token");
          return Promise.reject(error);
        })
        .finally();
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
