// "use client";

import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("token") !== undefined;

  const protectedRoutes = ["/dashboard", "/settings"];
  const authRoutes = ["/forgot-password", "/sign-in", "/sign-up"];

  if (isAuthenticated && authRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
