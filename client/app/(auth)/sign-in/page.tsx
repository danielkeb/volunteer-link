"use client";

import { TextInput } from "@/components/formElements";
import Button from "@/components/global/Button";
import { Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import {
  emailValidation,
  passwordValidation,
} from "../../lib/forms/verificationSchemas";

export default function SignIn() {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-3xl font-medium leading-9">Welcome Back</h3>
        <p className="font-normal leading-tight">
          Enter your credentials to login.
        </p>
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: emailValidation,
          password: passwordValidation,
        })}
        onSubmit={() => {}}
      >
        <Form className="flex flex-col gap-4">
          <TextInput
            label="Email"
            props={{
              name: "email",
              type: "email",
              autoComplete: "off",
            }}
          />

          <TextInput
            label="Password"
            props={{
              name: "password",
              type: "password",
            }}
          />
          <Link
            className="self-end text-sm leading-tight text-accent-200 underline"
            href="/forgot-password"
          >
            Forgot password?
          </Link>

          <Button type="submit" variant="filled" size="base" text="Sign In" />
        </Form>
      </Formik>

      <Link className="self-center" href="/sign-up">
        <span>Don’t have an account? </span>
        <span className="underline">Create one.</span>
      </Link>
    </>
  );
}
