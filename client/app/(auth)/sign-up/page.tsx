import Button from "@/components/global/Button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-3xl font-medium leading-9">Create an account</h3>
        <p className="font-normal leading-tight">
          By creating an account you agree to our{" "}
          <span className="text-accent-100 underline">
            <Link href="/tos">terms of service </Link>
          </span>
          and{" "}
          <span className="text-accent-100 underline">
            <Link href="/privacy">privacy policy</Link>
          </span>
          .
        </p>
      </div>

      <div className="flex flex-col items-stretch justify-start gap-4">
        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="flex flex-grow flex-col justify-start gap-2">
            <label className="font-medium">First Name</label>
            <input
              type="text"
              className="w-full focus:border focus:border-accent-200"
            />
          </div>

          <div className="flex flex-grow flex-col justify-start gap-2">
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              className="w-full focus:border focus:border-accent-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="flex flex-grow flex-col justify-start gap-2">
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="w-full focus:border focus:border-accent-200"
            />
          </div>
          <div className="flex flex-grow flex-col justify-start gap-2">
            <label className="font-medium">Username</label>
            <input
              type="text"
              className="w-full focus:border focus:border-accent-200"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-2">
          <label className="font-medium">Location</label>
          <select className="w-full focus:border focus:border-accent-200"></select>
        </div>

        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="flex flex-grow flex-col justify-start gap-2">
            <label className="font-medium">Password</label>
            <input
              type="password"
              className="w-full focus:border focus:border-accent-200"
            />
          </div>

          <div className="flex flex-grow flex-col justify-start gap-2">
            <label className="font-medium">Repeat Password</label>
            <input
              type="password"
              className="w-full focus:border focus:border-accent-200"
            />
          </div>
        </div>
      </div>

      <Button variant="filled" size={"base"} text="Sign Up" />

      <div className="flex items-center justify-center gap-2 self-stretch text-text-200">
        <div className="flex-grow border-y-[.5px] border-text-200"></div>
        <span>Or</span>
        <div className="flex-grow border-y-[.5px] border-text-200"></div>
      </div>

      <Button variant={"filled"} size={"base"} text="Sign up with Google" />

      <Link className="self-center" href="/sign-in">
        <span>Already have an account? </span>
        <span className="underline">Login.</span>
      </Link>
    </>
  );
}
