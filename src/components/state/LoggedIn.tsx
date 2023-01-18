import { useState } from "react";

export function LoggedIn() {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {login ? "logged in" : "logged out"}</div>
    </div>
  );
}
