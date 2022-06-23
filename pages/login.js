import Cookie from "js-cookie";
import Router from "next/router";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import { login } from "../libs/auth-api";

export default function LoginPage() {
  const accessToken = Cookie.get("access_token");
  const refreshToken = Cookie.get("refresh_token");

  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = async () => {
    setIsLoading(true);
    try {
      const response = await login({
        email: "lvh080020@gmail.com",
        password: "123123",
      });
      const { token, refreshToken } = response;

      if (token && refreshToken) {
        Cookie.set("access_token", token);
        Cookie.set("refresh_token", refreshToken);
        mutate("auth", { token: token, refreshToken: refreshToken });
        Router.push("/");
      }
    } catch (error) {
      console.log("failed to login", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (accessToken && refreshToken) Router.replace("/");
  }, [accessToken, refreshToken]);

  if (isLoading)
    return (
      <div>
        <h1>Redirecting...</h1>
      </div>
    );

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}
