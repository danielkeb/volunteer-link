"use client";

import { AuthContext } from "@/app/lib/contexts/AppContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import RequestPasswordResetForm from "./RequestPasswordResetForm";
import ResetPasswordForm from "./ResetPasswordForm";
import VerifyResetCodeForm from "./VerifyResetCodeForm";

export default function ForgotPassword() {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [isValidCode, setIsValidCode] = useState(false);

  if (isLoggedIn) {
    router.replace("/");
  }

  return (
    <>
      {/* email not sent */}
      {!emailSent && (
        <RequestPasswordResetForm
          setEmailSent={setEmailSent}
          setEmail={setEmail}
        />
      )}

      {/* email is sent */}
      {emailSent && !isValidCode && (
        <VerifyResetCodeForm email={email} setIsValidCode={setIsValidCode} />
      )}

      {/* email is sent and reset code verified */}
      {emailSent && isValidCode && (
        <ResetPasswordForm
          email={email}
          setEmail={setEmail}
          setEmailSent={setEmailSent}
        />
      )}
    </>
  );
}
