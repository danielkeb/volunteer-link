"use client";

import { useContext } from "react";
import { AuthContext } from "./lib/contexts/AppContext";

export default function HomePage() {
  const { logout, user } = useContext(AuthContext);
  return (
    <div>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.bio}</p>
      <p>{user.locationId}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
