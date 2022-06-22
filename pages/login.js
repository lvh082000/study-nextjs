import Cookie from "js-cookie";
import { useUser } from "../hooks/use-auth";
import { login } from "../libs/auth-api";
import React, { useEffect } from "react";
import Router from "next/router";

export default function LoginPage() {
  const { mutate, loggedIn } = useUser();

  const handleLoginClick = async () => {
    try {
      const response = await login({
        email: "lvh080020@gmail.com",
        password: "123123",
      }); 
      await mutate();
      const { token, refreshToken } = response;

      Cookie.set("access_token", token);
      Cookie.set("refresh_token", refreshToken);
    } catch (error) {
      console.log("failed to login", error);
    }
  };

  useEffect(() => {
    if (loggedIn) Router.replace("/");
  }, [loggedIn]);

  if (loggedIn) return <> Redirecting.... </>;

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}
