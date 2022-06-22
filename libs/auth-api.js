import axiosClient from "./axios-client";

export const login = async (payload) => {
  return axiosClient.post("/auth/login", payload);
};

export const getProfile = async () => {
  return axiosClient.get("/user/profile");
};
