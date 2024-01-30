import LogoIcon from "@/public/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col  justify-start bg-bg-200 text-text-100 lg:flex-row">
      {/* Left side */}
      <div className="flex w-full flex-col items-center justify-center px-[clamp(36px,5vw,96px)] py-12 lg:w-1/3 lg:items-start lg:justify-between lg:bg-primary-100">
        {/* Logo icon */}
        <Link className="flex flex-row items-center gap-4" href="/">
          <Image
            src={LogoIcon}
            width={40}
            height={40}
            alt="Logo of VolunteerLink"
          />
          <span className="text-[clamp(20px,2vw,30px)] font-semibold">
            VolunteerLink
          </span>
        </Link>
        {/* Quote */}
        <div className="hidden flex-col gap-8 lg:flex">
          <p className="text-pretty text-[clamp(24px,2vw,36px)] font-semibold leading-tight text-text-100">
            “Life’s most persistent and urgent question is, what are you doing
            for others?”
          </p>
          <span className="self-end text-xl italic">
            - Martin Luther King, Jr.
          </span>
        </div>
        <div></div> {/* Placeholder */}
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center py-12 lg:flex-grow">
        {/* Form container */}
        <div className="w-[clamp(500px,50%,00px)] flex-col items-center justify-center gap-8 rounded-lg border border-bg-300 bg-bg-100 px-10 py-12 shadow">
          <div className="flex flex-col items-stretch justify-start gap-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
