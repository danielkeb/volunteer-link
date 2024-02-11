"use client";

import { useContext } from "react";
import HomePage from "./Home";
import LandingPage from "./LandingPage";
import { AuthContext } from "./lib/contexts/AppContext";

export default function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  return <>{isLoggedIn ? <HomePage /> : <LandingPage />}</>;
}
