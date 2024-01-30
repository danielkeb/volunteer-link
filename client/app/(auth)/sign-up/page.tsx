"use client";

import { SelectInput, TextInput } from "@/components/formElements";
import Button from "@/components/global/Button";
import {
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  locationValidation,
  passwordValidation,
  repeatPasswordValidation,
  usernameValidation,
} from "@/lib/forms/verificationSchemas";
import { Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

export default function SignUp() {
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

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          locations: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={Yup.object({
          firstName: firstNameValidation,
          lastName: lastNameValidation,
          email: emailValidation,
          username: usernameValidation,
          location: locationValidation,
          password: passwordValidation,
          repeatPassword: repeatPasswordValidation,
        })}
        onSubmit={() => {}}
      >
        <Form className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 xl:flex-row">
            <TextInput
              label="First Name"
              props={{
                name: "firstName",
                type: "text",
                autoComplete: "off",
              }}
            />

            <TextInput
              label="Last Name"
              props={{
                name: "lastName",
                type: "text",
                autoComplete: "off",
              }}
            />
          </div>

          <div className="flex flex-col gap-4 xl:flex-row">
            <TextInput
              label="Email"
              props={{
                name: "email",
                type: "email",
                autoComplete: "off",
              }}
            />

            <TextInput
              label="Username"
              props={{
                name: "username",
                type: "text",
                autoComplete: "off",
              }}
            />
          </div>

          <SelectInput
            label="Location"
            props={{
              name: "location",
              type: "select",
            }}
          >
            <option value="">Select your location</option>
            <option value="addis ababa">Addis Ababa</option>
            <option value="gondor">Gondor</option>
          </SelectInput>

          <div className="flex flex-col gap-4 xl:flex-row">
            <TextInput
              label="Password"
              props={{
                name: "password",
                type: "password",
              }}
            />

            <TextInput
              label="Repeat Password"
              props={{
                name: "repeatPassword",
                type: "password",
              }}
            />
          </div>

          <Button type="submit" variant="filled" size={"base"} text="Sign Up" />
        </Form>
      </Formik>

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
