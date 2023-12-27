import Image from "next/image";
import Link from "next/link";
import Button from "../global/Button";
import Container from "../global/Container";
import Logo from "../global/Logo";

export default function Header() {
  return (
    <Container
      large
      classes="py-6 flex flex-row justify-between items-center bg-primary-100"
    >
      {/* The curve at the top left side of the header */}
      <div className="hidden lg:block md:absolute md:top-0 md:left-0 md:z-10">
        <Image src="/header-curve.svg" alt={""} width={800} height={100} />
      </div>

      <Link href="/" className="z-20">
        <Logo width={50} height={50} classes="[&>path]:fill-primary-100" />
      </Link>

      <nav className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <ul className="md:[&>li]:inline-flex [&>li]:py-2 md:[&>li]:px-3 py-7 hover:[&>li]:text-accent-200">
          <li>
            <Link href="/organizations">Organizations</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <div>
          <Link href="/sign-in">
            <Button variant="filled" size={"base"} text="Sign in" />
          </Link>
        </div>
      </nav>
    </Container>
  );
}
