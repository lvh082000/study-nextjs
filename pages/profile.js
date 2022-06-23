import Cookie from "js-cookie";
import Router from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { MainLayout } from "../components/layout";
import storage from "../utils/storage";

export default function ProfilePage() {
  const accessToken = Cookie.get("access_token");
  const refreshToken = Cookie.get("refresh_token");

  const { data } = useSWR("user", storage);

  useEffect(() => {
    if (!accessToken && !refreshToken) Router.replace("/login");
  }, [accessToken, refreshToken]);

  return (
    <div>
      <h1>Profile page</h1>
      <h5>Name: {data?.name}</h5>
      <h5>Email address: {data?.email}</h5>
    </div>
  );
}

ProfilePage.Layout = MainLayout;
