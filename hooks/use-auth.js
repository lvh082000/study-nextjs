import useSWR from "swr";

import userFetcher from "../libs/user-api";

export function useUser() {
  const { data, mutate, error } = useSWR("user/profile", userFetcher, {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });

  return {
    user: data,
    mutate,
  };
}
