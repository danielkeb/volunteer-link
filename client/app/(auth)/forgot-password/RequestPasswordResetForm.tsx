import { emailValidation } from "@/app/lib/forms/verificationSchemas";
import { TextInput } from "@/components/formElements";
import Button from "@/components/global/Button";
import Snackbar from "@/components/global/Snackbar";
import axios from "axios";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

export default function RequestPasswordResetForm({
  setEmailSent,
  setEmail,
}: {
  setEmailSent: (success: boolean) => void;
  setEmail: (email: string) => void;
}) {
  const [snackbar, setSnackBar] = useState<{
    message: string;
    type: string;
    duration: number;
  } | null>(null);

  return (
    <>
      {snackbar && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          duration={snackbar.duration}
          setSnackbar={setSnackBar}
        />
      )}

      <div className="space-y-2">
        <h3 className="text-3xl font-medium leading-9">
          Forgot your password?
        </h3>
        <p className="font-normal leading-tight">
          Don’t worry. We will send you a password rest instruction. Just type
          in your email.
        </p>
      </div>

      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: emailValidation,
        })}
        onSubmit={async (values) => {
          setEmail(values.email);

          try {
            await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/auth/forgotPassword`,
              values,
            );

            setEmailSent(true);
          } catch (error: any) {
            setSnackBar({
              message: error.response.data.message,
              type: "error",
              duration: 5000,
            });
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <TextInput
              label="Email"
              props={{
                name: "email",
                type: "email",
                autoComplete: "off",
              }}
            />

            <Button
              variant="filled"
              size="base"
              text="Send"
              type="submit"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>

      <Link className="self-center" href="/sign-in">
        <span>Did you remember you password? </span>
        <span className="underline">Sign in.</span>
      </Link>
    </>
  );
}
