import Cookie from "js-cookie";
import Router from "next/router";
import { mutate } from "swr";

export default function HomePage() {
  const handleLogoutClick = async () => {
    Cookie.remove("access_token");
    Cookie.remove("refresh_token");
    mutate("auth", null);
    Router.push(`/login`);
  };

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
