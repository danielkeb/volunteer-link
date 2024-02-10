"use client";

import axiosInstance from "@/app/axiosInstance";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
  token: "",
  setToken: (token: string) => {},
  user: {},
  setUser: (user: object) => {},
  logout: () => {},
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") || "";
    }
    return "";
  });

  const logout = () => {
    setToken("");
    setUser({});
    localStorage.removeItem("token");
    router.push("/sign-in");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    if (token) {
      getUserData();
    }
  }, []);

  const getUserData = async () => {
    try {
      const response = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      );

      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {}
  };

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        logout,
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
