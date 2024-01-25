import Button from "@/components/global/Button";
import Link from "next/link";

export default function page() {
  const success = false;
  return (
    <>
      {success ? (
        <>
          <div className="space-y-2">
            <h3 className="text-balance text-xl font-medium leading-9">
              Password reset instructions have been sent. Check your email
              inbox.
            </h3>
          </div>

          <div className="inline-flex items-center justify-center gap-6">
            <Button variant="text" size="base" text="Resend" />
            <Button variant="filled" size="base" text="Back to login" />
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <h3 className="text-3xl font-medium leading-9">
              Forgot your password?
            </h3>
            <p className="font-normal leading-tight">
              Don’t worry. We will send you a password rest instruction. Just
              type in your email.
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
          </div>

          <Button variant="filled" size={"base"} text="Send" />

          <Link className="self-center" href="/sign-in">
            <span>Did you remember you password? </span>
            <span className="underline">Login.</span>
          </Link>
        </>
      )}
    </>
  );
}
