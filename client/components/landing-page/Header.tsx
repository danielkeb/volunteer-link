"use client";

import LogoIcon from "@/public/icons/logo.svg";
import Menu from "@/public/icons/menu.svg";
import Close from "@/public/icons/x.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../global/Button";
import Container from "../global/Container";

export default function Header() {
  const [iconSrc, setIconSrc] = useState(Menu);
  const [navHidden, setNavHidden] = useState(true);

  const changeIcon = () => {
    if (iconSrc === Menu) {
      setIconSrc(Close);
    } else {
      setIconSrc(Menu);
    }

    setNavHidden(navHidden === true ? false : true);
  };

  return (
    <Container large classes="bg-primary-100">
      <nav className="relative flex flex-row items-center justify-between gap-16 py-2">
        {/* Logo icon */}
        <div className="z-10">
          <Link href="/">
            <Image src={LogoIcon} alt="Logo of VolunteerLink" />
          </Link>
        </div>

        {/* Nav links */}
        <div
          className={clsx(
            { "hidden lg:flex": navHidden },
            "absolute right-0 top-full flex min-h-fit w-full items-center rounded-md bg-bg-100 px-5 py-4 shadow-lg duration-500 md:py-0 lg:static lg:w-auto lg:bg-primary-100 lg:shadow-none",
          )}
        >
          <ul className="flex w-full flex-col text-lg md:p-4 lg:flex-row lg:items-center lg:gap-8 lg:p-0 hover:[&>li>a]:text-accent-200 [&>li]:py-4">
            <li>
              <Link href="/organizations">Organizations</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/sign-in">
                <Button
                  variant="filled"
                  size={"sm"}
                  text="Sign in"
                  classes="w-fill lg:w-fit"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger menu on small screens */}
        <div className="flex items-center gap-6 lg:hidden">
          <Image
            onClick={changeIcon}
            src={iconSrc}
            className="cursor-pointer text-3xl"
            alt="Hamburger menu"
          />
        </div>
      </nav>
    </Container>
  );
}
