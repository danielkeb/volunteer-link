"use client";

import Button from "@/components/global/Button";
import Header from "@/components/landing-page/Header";
import PageNotFoundImage from "@/public/img/404-page-image.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PageNotFound() {
  const router = useRouter();

  return (
    <div className="h-screen bg-primary-100">
      <Header />

      <main className="min-h flex flex-col items-center justify-center gap-12 bg-primary-100">
        <div>
          <Image
            src={PageNotFoundImage}
            alt="Page not found illustration"
            style={{ width: "90%", height: "auto" }}
          />
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-semibold md:text-4xl xl:text-6xl">
            404 - Page not found
          </h1>
          <p className="text-base text-text-200 md:text-lg xl:text-xl">
            Oops! The page you are looking for could not be found.
          </p>
        </div>

        <div className="inline-flex gap-6">
          <div onClick={() => router.refresh()}>
            <Button variant={"outlined"} size={"lg"} text="Try Again" />
          </div>
          <Link href="/">
            <Button variant={"filled"} size={"lg"} text="Go Back Home" />
          </Link>
        </div>
      </main>
    </div>
  );
}
