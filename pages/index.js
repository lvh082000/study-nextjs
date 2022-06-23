import Cookie from "js-cookie";
import Router from "next/router";
import { useEffect } from "react";
import useSWR, { mutate } from "swr";
import { MainLayout } from "../components/layout";
import { getProfile } from "../libs/auth-api";

export default function HomePage() {
  const accessToken = Cookie.get("access_token");
  const refreshToken = Cookie.get("refresh_token");

  useSWR("user", getProfile);

  const handleLogoutClick = async () => {
    Cookie.remove("access_token");
    Cookie.remove("refresh_token");
    window.localStorage.removeItem("user");
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

HomePage.Layout = MainLayout;
