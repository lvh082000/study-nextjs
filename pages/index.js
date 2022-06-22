import Cookie from "js-cookie";
import Router from "next/router";
import { useUser } from "../hooks/use-auth";

export default function LoginPage() {
  const { user, loading, loggedIn, mutate } = useUser();

  const handleLogoutClick = async () => {
    Cookie.remove("access_token");
    Cookie.remove("refresh_token");
    mutate(null, false);
    Router.replace("/");
  };

  if (loading)
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );

  if (loggedIn && user.data?._id)
    return (
      <div>
        <h1>Home page</h1>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    );

  return (
    <div>
      <h1>Login to get info</h1>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
