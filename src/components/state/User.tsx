import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export function User() {
  const [user, setUser] = useState<AuthUser | null>(null);
  //The initial value of 'user' is set to null because a user is not signed in. In order to be able to tell TS that this
  //value might be something other than null in the future, we can specify this by explicitly declaring the possible types with <> and unions

  const handleLogin = () => {
    setUser({
      name: "Raul",
      email: "raul@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}

// export function User() {
//     const [user, setUser] = useState<AuthUser>({} as AuthUser);
//     //If we know that a value will never be null after the initial value, we can use type assertion
//      // to render the data without optional chaining
//     const handleLogin = () => {
//       setUser({
//         name: "Raul",
//         email: "raul@example.com",
//       });
//     };
//     const handleLogout = () => {
//       setUser(null);
//     };

//     return (
//       <div>
//         <button onClick={handleLogin}>Login</button>
//         <button onClick={handleLogout}>Logout</button>
//         <div>User name is {user?.name}</div>
//         <div>User email is {user?.email}</div>
//       </div>
//     );
//   }
