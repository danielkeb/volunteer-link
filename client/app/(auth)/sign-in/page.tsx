import Button from "@/components/global/Button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-3xl font-medium leading-9">Welcome Back</h3>
        <p className="font-normal leading-tight">
          Enter your credentials to login.
        </p>
      </div>

      <div className="flex flex-col items-stretch justify-start gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <label className="font-medium">Email</label>
          <input
            type="email"
            className="w-full focus:border focus:border-accent-200"
          />
        </div>

        <div className="flex flex-col items-start justify-start gap-2">
          <label className="font-medium">Password</label>
          <input
            type="password"
            className="w-full focus:border focus:border-accent-200"
          />
          <Link
            className="self-end text-sm leading-tight text-accent-200 underline"
            href="/forgot-password"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <Button variant={"filled"} size={"base"} text={"Sign In"} />

      <div className="flex items-center justify-center gap-2 self-stretch text-text-200">
        <div className="flex-grow border-y-[.5px] border-text-200"></div>
        <span>Or</span>
        <div className="flex-grow border-y-[.5px] border-text-200"></div>
      </div>

      <Button variant={"filled"} size={"base"} text={"Continue with Google"} />

      <Link className="self-center" href="/sign-up">
        <span>Don’t have an account? </span>
        <span className="underline">Create one.</span>
      </Link>
    </>
  );
}
