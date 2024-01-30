"use client";

import { TextInput } from "@/components/formElements";
import Button from "@/components/global/Button";
import { emailValidation } from "@/lib/forms/verificationSchemas";
import { Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

export default function ForgotPassword() {
  let success = false;

  return (
    <>
      {success ? (
        <>
          <div className="space-y-2 text-center">
            <h3 className="text-balance text-xl font-medium leading-9">
              Password reset instructions have been sent. Check your email
              inbox.
            </h3>
          </div>

          <div className="inline-flex items-center justify-center gap-6">
            <Button variant="text" size="base" text="Resend" />
            <Link href="/sign-in">
              <Button variant="filled" size="base" text="Back to login" />
            </Link>
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

          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object({
              email: emailValidation,
            })}
            onSubmit={() => {}}
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
      )}
    </>
  );
}
