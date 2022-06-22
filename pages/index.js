import Cookie from "js-cookie";
import { useUser } from "../hooks/use-auth";
import { authApi } from "../libs";

export default function LoginPage() {
  const { user, mutate } = useUser();

  console.log({user});
  const handleLoginClick = async () => {
    try {
      const response = await authApi.login({
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

  const handleLogoutClick = async () => {
    Cookie.remove("access_token");
    Cookie.remove("refresh_token");
    mutate(null, false);
  };

  return (
    <div>
      <h1>{user ? "Home page" : "Login page"}</h1>

      {!user && <button onClick={handleLoginClick}>Login</button>}

      {user && <button onClick={handleLogoutClick}>Logout</button>}
    </div>
  );
}
