"use client";

import { useContext } from "react";
import HomePage from "./Home";
import LandingPage from "./LandingPage";
import { AppContext } from "./lib/contexts/AuthContext";

export default function Home() {
  const { isLoggedIn } = useContext(AppContext);

  return <>{isLoggedIn ? <HomePage /> : <LandingPage />}</>;
}
