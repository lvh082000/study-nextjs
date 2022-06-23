import Cookie from "js-cookie";
import Router from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { MainLayout } from "../components/layout";
import { getProfile } from "../libs/auth-api";

export default function ProfilePage() {
  const accessToken = Cookie.get("access_token");
  const refreshToken = Cookie.get("refresh_token");

  const { data, error } = useSWR("user", getProfile);

  useEffect(() => {
    if (!accessToken && !refreshToken) Router.replace("/login");
  }, [accessToken, refreshToken]);

  if (error) return <h1>Has error</h1>;

  if (!data) return <h1>Loading profile</h1>;

  return (
    <div>
      <h1>Profile page</h1>
      <h5>Name: {data?.data?.name}</h5>
      <h5>Email address: {data?.data?.email}</h5>
    </div>
  );
}

ProfilePage.Layout = MainLayout;
