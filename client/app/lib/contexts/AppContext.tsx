"use client";

import axiosInstance from "@/app/axiosInstance";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { deleteCookie, getCookie } from "../cookies";

type User = {
  id: String;
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  bio?: String;
  roleId: String;
  locationId: String;
  profilePictureId?: String;
  lastLoggedInAt: Date;
  verified: Boolean;
  token: String;
  locationPreference: "BOTH" | "REMOTE" | "IN_PERSOn";
  timePreference: "BOTH" | "SHORT_TERM" | "LONG_TERM";
  createdAt: Date;
  updatedAt: Date;
};

export const AuthContext = createContext({
  token: "",
  setToken: (token: string) => {},
  user: {},
  setUser: (user: object) => {},
  logout: () => {},
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => {},
});

export default function AppContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | {}>({});
  const [token, setToken] = useState<string>(() => {
    const newToken = getCookie("token");
    return newToken ? newToken : "";
  });

  const logout = () => {
    setIsLoggedIn(false);
    setToken("");
    setUser({});
    deleteCookie("token");
    router.push("/sign-in");
  };

  useEffect(() => {
    const token = getCookie("token");

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
      const response = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      );

      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
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
    </AuthContext.Provider>
  );
}
