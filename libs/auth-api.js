import axiosClient from "./axios-client";

export const login = async (payload) => {
  return axiosClient.post("/auth/login", payload);
};

export const getProfile = async () => {
  const response = await axiosClient.get("/user/profile");
  if (response?.data)
    window.localStorage.setItem("user", JSON.stringify(response?.data));
  return response;
};
