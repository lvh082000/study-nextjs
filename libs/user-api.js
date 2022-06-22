import axiosClient from "./axios-client";

const userFetcher = async () => {
  return axiosClient.get("/user/profile");
};

export default userFetcher;
