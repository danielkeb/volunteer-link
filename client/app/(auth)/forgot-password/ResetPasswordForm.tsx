import axiosInstance from "@/app/axiosInstance";
import { AuthContext } from "@/app/lib/contexts/AppContext";
import {
  passwordValidation,
  repeatPasswordValidation,
} from "@/app/lib/forms/verificationSchemas";
import { TextInput } from "@/components/formElements";
import Button from "@/components/global/Button";
import Snackbar from "@/components/global/Snackbar";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import * as Yup from "yup";

export default function ResetPasswordForm({
  email,
  setEmailSent,
  setEmail,
}: {
  email: string | null;
  setEmailSent: (success: boolean) => void;
  setEmail: (email: string) => void;
}) {
  const router = useRouter();
  const { setIsLoggedIn, setToken, setUser } = useContext(AuthContext);

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
          Enter your new password
        </h3>
        <p className="font-normal leading-tight">
          And try not to forget it. :-)
        </p>
      </div>

      <Formik
        initialValues={{ password: "", repeatPassword: "" }}
        validationSchema={Yup.object({
          password: passwordValidation,
          repeatPassword: repeatPasswordValidation,
        })}
        onSubmit={async (values) => {
          try {
            const res = await axiosInstance.post(
              `${process.env.NEXT_PUBLIC_API_URL}/auth/resetPassword`,
              {
                email: email,
                newPassword: values.password,
              },
            );

            setIsLoggedIn(true);
            setToken(res.data.token);
            setUser(res.data);

            setEmailSent(false);
            setEmail("");

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
              label="Password"
              props={{
                name: "password",
                type: "password",
                autoComplete: "off",
              }}
            />

            <TextInput
              label="Repeat Password"
              props={{
                name: "repeatPassword",
                type: "password",
                autoComplete: "off",
              }}
            />

            <Button
              variant="filled"
              size="base"
              text="Update"
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
