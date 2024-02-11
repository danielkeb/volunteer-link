"use client";

import { AuthContext } from "@/app/lib/contexts/AppContext";
import {
  emailValidation,
  passwordValidation,
} from "@/app/lib/forms/verificationSchemas";
import { TextInput } from "@/components/formElements";
import Button from "@/components/global/Button";
import Snackbar from "@/components/global/Snackbar";
import axios from "axios";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import * as Yup from "yup";

export default function SignInForm() {
  const router = useRouter();

  const { setUser, setToken, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);
  const [snackbar, setSnackBar] = useState<{
    message: string;
    type: string;
    duration: number;
  } | null>(null);

  // Redirect to the home page if the user is logged in
  if (isLoggedIn) {
    router.replace("/");
  }

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

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: emailValidation,
          password: passwordValidation,
        })}
        onSubmit={async (values) => {
          try {
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/auth/signIn`,
              values,
            );

            console.log("user", res.data);

            localStorage.setItem("token", res.data.token);

            setToken(res.data.token);
            setUser(res.data);
            setIsLoggedIn(true);

            router.replace("/");
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

            <Button
              disabled={isSubmitting}
              type="submit"
              variant="filled"
              size="base"
              text="Sign In"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
