import useSWR from "swr";
import { getProfile } from "../libs/auth-api";

export function useUser() {
  const { data, mutate, error } = useSWR("api_user", getProfile);

  const loading = !data && !error;
  const loggedIn = !error && !!data;

  return {
    loading,
    loggedIn,
    user: data,
    mutate,
  };
}
