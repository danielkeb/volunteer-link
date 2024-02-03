import { fetchLocations } from "@/app/lib/locations";
import Button from "@/components/global/Button";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export default async function SignUp() {
  const locations = await fetchLocations();

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

      <SignUpForm locations={locations} />

      <div className="flex items-center justify-center gap-2 self-stretch text-text-200/50">
        <div className="flex-grow border-y-[.5px] border-text-200/50"></div>
        <span>Or</span>
        <div className="flex-grow border-y-[.5px] border-text-200/50"></div>
      </div>

      <Button variant="filled" size="base" text="Sign up with Google" />

      <Link className="self-center" href="/sign-in">
        <span>Already have an account? </span>
        <span className="underline">Sign in.</span>
      </Link>
    </>
  );
}
