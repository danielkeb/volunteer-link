import {
  default as Logo,
  default as LogoSample,
} from "@/public/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-info text-sm text-bg-100">
      <div className="container flex flex-row items-start justify-between py-16">
        <div className="w-full space-y-20 lg:w-1/3">
          <div className="space-y-8">
            <div className="flex flex-row items-center gap-4">
              <Image src={Logo} alt="Logo of VolunteerLink" />
              <span className="text-3xl font-semibold">VolunteerLink</span>
            </div>

            <p className="text-base">
              Ut est velit velit. Magnam quisquam dolor labore. Ipsum eius
              aliquam dolor quiquia quaerat. Eius aliquam modi est. Etincidunt
              tempora numquam quiquia. Magnam sed quiquia modi ut dolor.
            </p>
          </div>

          <div className="flex flex-row gap-16 [&>span>svg>path]:fill-bg-100">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M234.33 69.52a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-72.11 61.81l-48 32A4 4 0 0 1 108 160V96a4 4 0 0 1 6.22-3.33l48 32a4 4 0 0 1 0 6.66"
                />
              </svg>
            </span>

            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M96 176a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm-8-80a12 12 0 1 1 12-12a12 12 0 0 1-12 12m96 80a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140Z"
                />
              </svg>
            </span>

            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32"
                />
              </svg>
            </span>

            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M239.49 23.16a13 13 0 0 0-13.23-2.26L23.6 100.21a18.22 18.22 0 0 0 3.12 34.86L76 144.74V200a20 20 0 0 0 34.4 13.88l22.67-23.51L170.35 223a20 20 0 0 0 32.7-10.54l40.62-176.55a13 13 0 0 0-4.18-12.75m-92.08 54.36l-62.19 44.57l-34.43-6.75ZM100 190.06v-28.71l15 13.15Zm81.16 10.52l-73.88-64.77l106.31-76.18Z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="hidden space-y-16 lg:block">
          <h5 className="text-2xl">Useful Links</h5>

          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            <Link href="/about-us">About Us</Link>
            <Link href="/about-us">Organizations</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/about-us">Volunteers</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>

        <div className="hidden space-y-16 lg:block">
          <h5 className="text-2xl">Contact Us</h5>

          <div className="grid grid-cols-1 gap-y-8">
            <Link href="/about-us" className="flex flex-row items-start gap-4">
              <Image
                alt=""
                src={LogoSample}
                style={{
                  display: "inline-flex",
                  width: "10%",
                  height: "auto",
                }}
              />
              <span>Addis Ababa, Ethiopia</span>
            </Link>
            <Link href="/faq" className="flex flex-row items-start gap-4">
              <Image
                alt=""
                src={LogoSample}
                style={{
                  display: "inline-flex",
                  width: "10%",
                  height: "auto",
                }}
              />
              <span>support@colunteerlink.com</span>
            </Link>

            <Link href="/about-us" className="flex flex-row items-start gap-4">
              <Image
                alt=""
                src={LogoSample}
                style={{
                  display: "inline-flex",
                  width: "10%",
                  height: "auto",
                }}
              />
              <div className="flex flex-col gap-2">
                <span>+25196-016-1107</span>
                <span>+25196-016-1107</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-bg-300/60 py-1 opacity-75">
        <div className="container flex flex-col justify-between md:flex-row">
          <span>@VolunteerLink. All rights reserved.</span>
          <div className="space-x-8">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
