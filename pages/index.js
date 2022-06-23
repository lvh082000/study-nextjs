import Cookie from "js-cookie";
import Router from "next/router";
import { useEffect } from "react";
import useSWR, { mutate } from "swr";

export default function HomePage() {
  const accessToken = Cookie.get("access_token");
  const refreshToken = Cookie.get("refresh_token");

  const storage = async (key) => {
    const value = localStorage.getItem(key);
    return !!value ? JSON.parse(value) : undefined;
  };

  const { data } = useSWR("auth", storage);

  const handleLogoutClick = async () => {
    window.localStorage.removeItem("auth");
    Cookie.remove("access_token");
    Cookie.remove("refresh_token");
    mutate("auth", null);
    Router.push(`/login`);
  };

  useEffect(() => {
    if (!accessToken && !refreshToken) Router.replace("/login");
  }, [accessToken, refreshToken]);

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
